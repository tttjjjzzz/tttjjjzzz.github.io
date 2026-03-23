(function () {
    const R    = 42;   // circle radius px
    const D    = R * 2;

    function loadImage(url) {
        return new Promise(resolve => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload  = () => resolve(img);
            img.onerror = () => resolve(null);
            img.src = url;
        });
    }

    function buildCircleTexture(skill, iconImg) {
        const c   = document.createElement('canvas');
        c.width   = D;
        c.height  = D;
        const ctx = c.getContext('2d');

        // clip everything to circle
        ctx.beginPath();
        ctx.arc(R, R, R - 1, 0, Math.PI * 2);
        ctx.clip();

        if (iconImg) {
            // glass background
            ctx.fillStyle = 'rgba(196, 181, 253, 0.12)';
            ctx.fill();
            // icon centred, with padding
            const pad = 14;
            ctx.drawImage(iconImg, pad, pad, D - pad * 2, D - pad * 2);
        } else if (skill.color) {
            // solid brand colour fill
            ctx.fillStyle = skill.color;
            ctx.fill();
            // abbr text
            ctx.fillStyle = 'rgba(255,255,255,0.9)';
            ctx.font = 'bold 13px Oxanium, sans-serif';
            ctx.textAlign    = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText((skill.abbr || skill.name.slice(0, 3)).toUpperCase(), R, R);
        }

        // circle border (drawn outside clip)
        ctx.restore && ctx.restore();
        ctx.beginPath();
        ctx.arc(R, R, R - 1, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(196, 181, 253, 0.45)';
        ctx.lineWidth   = 1.5;
        ctx.stroke();

        return c.toDataURL();
    }

    async function init() {
        const container = document.getElementById('skills-physics-container');
        if (!container || typeof Matter === 'undefined') return;

        const skills = SITE_CONFIG.skills;
        const W = container.offsetWidth;
        const H = container.offsetHeight;

        // load devicon SVGs
        const iconImgs = {};
        await Promise.all(skills.map(async s => {
            if (s.icon) iconImgs[s.name] = await loadImage(s.icon);
        }));

        // build circle textures
        const textures = {};
        for (const s of skills) {
            textures[s.name] = buildCircleTexture(s, iconImgs[s.name] || null);
        }

        // Matter.js — no gravity, top-down XY plane
        const { Engine, Render, Runner, Bodies, Body, Composite, Mouse, MouseConstraint } = Matter;

        const engine = Engine.create({ gravity: { x: 0, y: 0 } });

        const canvas = document.createElement('canvas');
        canvas.width  = W;
        canvas.height = H;
        canvas.style.display = 'block';
        container.appendChild(canvas);

        const render = Render.create({
            canvas,
            engine,
            options: { width: W, height: H, wireframes: false, background: 'transparent' }
        });

        // all 4 walls
        const wo = { isStatic: true, render: { fillStyle: 'transparent', strokeStyle: 'transparent', lineWidth: 0 } };
        Composite.add(engine.world, [
            Bodies.rectangle(W / 2,  H + 30,  W * 2, 60, wo),
            Bodies.rectangle(W / 2, -30,       W * 2, 60, wo),
            Bodies.rectangle(-30,    H / 2,    60, H * 2,  wo),
            Bodies.rectangle(W + 30, H / 2,    60, H * 2,  wo),
        ]);

        // skill circle bodies — random positions + initial velocity kick
        const bodies = [];
        skills.forEach(skill => {
            const x = R + 10 + Math.random() * (W - D - 20);
            const y = R + 10 + Math.random() * (H - D - 20);

            const body = Bodies.circle(x, y, R, {
                restitution: 0.85,
                friction:    0,
                frictionAir: 0.018,  // surface drag — slows gradually
                render: { sprite: { texture: textures[skill.name], xScale: 1, yScale: 1 } }
            });

            // random initial kick
            const speed = 2 + Math.random() * 5;
            const angle = Math.random() * Math.PI * 2;
            Body.setVelocity(body, { x: Math.cos(angle) * speed, y: Math.sin(angle) * speed });
            body.skillName = skill.name;

            bodies.push(body);
            Composite.add(engine.world, body);
        });

        // mouse drag / throw
        const mouse = Mouse.create(canvas);
        const mc = MouseConstraint.create(engine, {
            mouse,
            constraint: { stiffness: 0.25, render: { visible: false } }
        });
        Composite.add(engine.world, mc);
        render.mouse = mouse;

        // tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'skills-tooltip';
        container.appendChild(tooltip);

        canvas.addEventListener('mousemove', e => {
            const rect = canvas.getBoundingClientRect();
            const scaleX = W / rect.width;
            const scaleY = H / rect.height;
            const mx = (e.clientX - rect.left) * scaleX;
            const my = (e.clientY - rect.top)  * scaleY;

            let hovered = null;
            for (const b of bodies) {
                const dx = b.position.x - mx;
                const dy = b.position.y - my;
                if (dx * dx + dy * dy <= R * R) { hovered = b; break; }
            }

            if (hovered) {
                tooltip.textContent  = hovered.skillName;
                tooltip.style.display = 'block';
                tooltip.style.left   = (e.clientX - rect.left + 14) + 'px';
                tooltip.style.top    = (e.clientY - rect.top  - 36) + 'px';
                canvas.style.cursor  = 'grab';
            } else {
                tooltip.style.display = 'none';
                canvas.style.cursor   = 'default';
            }
        });

        canvas.addEventListener('mouseleave', () => { tooltip.style.display = 'none'; });

        Render.run(render);
        Runner.run(Runner.create(), engine);
    }

    document.addEventListener('DOMContentLoaded', init);
})();
