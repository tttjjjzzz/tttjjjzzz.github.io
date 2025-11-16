// Component Builders for Reusable UI Elements

/**
 * Generate navigation menu items
 */
function generateNavigation(items, isMobile = false) {
    const baseClass = isMobile 
        ? "block text-lg font-medium text-gray-600 hover:text-blue-600"
        : "text-xl font-medium text-gray-600 hover:text-blue-600";
    
    return items.map(item => `
        <li><a href="${item.href}" class="${baseClass}">${item.name}</a></li>
    `).join('');
}

/**
 * Generate social media icon
 */
function generateSocialIcon(platform, url, size = 'w-7 h-7', colorClass = '') {
    const iconPath = ICONS[platform];
    const viewBox = platform === 'smiley' || platform === 'arrowDown' ? '0 0 24 24' : '0 0 24 24';
    const fillType = platform === 'smiley' || platform === 'arrowDown' ? 'none' : 'currentColor';
    const strokeType = platform === 'smiley' || platform === 'arrowDown' ? 'currentColor' : 'none';
    
    return `
        <a href="${url}" ${platform !== 'email' ? 'target="_blank"' : ''} class="${colorClass}">
            <span class="sr-only">${platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
            <svg class="${size}" fill="${fillType}" stroke="${strokeType}" viewBox="${viewBox}" aria-hidden="true">
                ${iconPath}
            </svg>
        </a>
    `;
}

/**
 * Generate social media icons group
 */
function generateSocialIcons(socialLinks, size = 'w-7 h-7') {
    const platforms = [
        { name: 'linkedin', url: socialLinks.linkedin, color: 'text-gray-500 hover:text-blue-600' },
        { name: 'github', url: socialLinks.github, color: 'text-gray-500 hover:text-gray-900' },
        { name: 'email', url: `mailto:${socialLinks.email}`, color: 'text-gray-500 hover:text-red-600' }
    ];
    
    return platforms.map(p => generateSocialIcon(p.name, p.url, size, p.color)).join('');
}

/**
 * Generate experience card
 */
function generateExperienceCard(exp) {
    return `
        <div class="timeline-item">
            <div class="exp-gradient-spawn group p-10 rounded-3xl shadow-md flex items-start gap-6 pl-10 hover:scale-105">
                <img src="${exp.logo}" alt="${exp.company} Logo" class="w-20 h-20 rounded-3xl object-cover shadow-md flex-shrink-0" />
            <div class="flex-1">
                <header class="flex flex-row justify-between items-start mb-3">
                    <div>
                        <h3 class="text-2xl font-extrabold text-gray-900 flex items-center gap-2">${exp.role}</h3>
                        <h4 class="text-xl font-bold text-gray-700 mt-2 mb-2 flex items-center gap-2">
                            <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 017.5 2h9A1.5 1.5 0 0118 3.5v9a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 016 12.5v-9zM7.5 3a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5h-9z" clip-rule="evenodd"/>
                                <path d="M3 8.5A1.5 1.5 0 014.5 7h.5v1h-.5a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V17h1v.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 013 17.5v-9z"/>
                            </svg>
                            ${exp.company}
                        </h4>
                    </div>
                    <div class="flex flex-col items-end gap-1">
                        <span class="text-lg font-semibold text-gray-700 flex items-center gap-2">
                            <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                            </svg>
                            ${exp.location}
                        </span>
                        <span class="text-lg font-semibold text-gray-500 flex items-center gap-2">
                            <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                            </svg>
                            ${exp.period}
                        </span>
                    </div>
                </header>
                <ul class="list-disc list-outside text-gray-700 space-y-2">
                    ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
                </ul>
            </div>
        </div>
        </div>
    `;
}

/**
 * Generate project card
 */
function generateProjectCard(project) {
    // Split tools by comma and create badge elements
    const toolBadges = project.tools
        .split(',')
        .map(tool => tool.trim())
        .map(tool => `<span class="tool-badge">${tool}</span>`)
        .join('');
    
    return `
        <a href="${project.link}" class="project-card block py-10 px-10 rounded-3xl shadow-md hover:shadow-xl hover:scale-105 max-w-2xl mx-auto" style="min-height: 300px;">
            <div class="project-card-content">
                <h3 class="project-title text-2xl font-bold text-gray-100 mb-4">
                    ${project.title}
                </h3>
                <p class="text-lg text-gray-100 my-3">
                    ${project.description}
                </p>
                <div class="flex flex-wrap gap-2 my-3">
                    ${toolBadges}
                </div>
                <span class="inline-block mt-4 text-purple-300 font-medium">
                    View Project Details &rarr;
                </span>
            </div>
            <div class="project-card-overlay">
                <div class="text-center px-6">
                    <svg class="w-16 h-16 mx-auto mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                    </svg>
                    <p class="text-2xl font-bold text-white">Click to Learn More</p>
                </div>
            </div>
        </a>
    `;
}

/**
 * Initialize dynamic content on page load
 */
function initializePage() {
    // Navigation
    const desktopNav = document.getElementById('desktop-nav');
    if (desktopNav) {
        desktopNav.innerHTML = generateNavigation(SITE_CONFIG.navigation);
    }
    
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav) {
        mobileNav.innerHTML = generateNavigation(SITE_CONFIG.navigation, true);
    }
    
    // Social Icons - Header Desktop
    const headerSocial = document.getElementById('header-social');
    if (headerSocial) {
        headerSocial.innerHTML = generateSocialIcons(SITE_CONFIG.social);
    }
    
    // Social Icons - Header Mobile
    const headerSocialMobile = document.getElementById('header-social-mobile');
    if (headerSocialMobile) {
        headerSocialMobile.innerHTML = generateSocialIcons(SITE_CONFIG.social);
    }
    
    // Social Icons - About Section
    const aboutSocial = document.getElementById('about-social');
    if (aboutSocial) {
        aboutSocial.innerHTML = generateSocialIcons(SITE_CONFIG.social, 'w-9 h-9');
    }
    
    // Experience Cards
    const experienceContainer = document.getElementById('experience-container');
    if (experienceContainer) {
        experienceContainer.innerHTML = SITE_CONFIG.experience.map(generateExperienceCard).join('');
    }
    
    // Project Cards
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = SITE_CONFIG.projects.map(generateProjectCard).join('');
    }
    
    // Personal Info - About Section
    const aboutTitle = document.getElementById('about-title');
    if (aboutTitle) {
        aboutTitle.textContent = `Hi, I am ${SITE_CONFIG.personal.fullName} 👋`;
    }
    
    const aboutSubtitle = document.getElementById('about-subtitle');
    if (aboutSubtitle) {
        aboutSubtitle.textContent = SITE_CONFIG.personal.title;
    }
    
    const aboutTagline = document.getElementById('about-tagline');
    if (aboutTagline) {
        aboutTagline.textContent = SITE_CONFIG.personal.tagline;
    }
    
    const aboutExpertise = document.getElementById('about-expertise');
    if (aboutExpertise) {
        aboutExpertise.textContent = SITE_CONFIG.personal.expertise;
    }
    
    const aboutPurpose = document.getElementById('about-purpose');
    if (aboutPurpose) {
        aboutPurpose.textContent = SITE_CONFIG.personal.websitePurpose;
    }
    
    // Resume Section
    const resumeUniversity = document.getElementById('resume-university');
    if (resumeUniversity) {
        resumeUniversity.textContent = SITE_CONFIG.education.university;
    }
    
    const resumeDegree = document.getElementById('resume-degree');
    if (resumeDegree) {
        resumeDegree.textContent = SITE_CONFIG.education.degree;
    }
    
    const resumeProgram = document.getElementById('resume-program');
    if (resumeProgram) {
        resumeProgram.textContent = SITE_CONFIG.education.program;
    }
    
    const resumeGraduation = document.getElementById('resume-graduation');
    if (resumeGraduation) {
        resumeGraduation.textContent = SITE_CONFIG.education.graduation;
    }
    
    // Resume Links
    const resumeGithubLink = document.getElementById('resume-github-link');
    if (resumeGithubLink) {
        resumeGithubLink.href = SITE_CONFIG.social.github;
    }
    
    const resumeLinkedinLink = document.getElementById('resume-linkedin-link');
    if (resumeLinkedinLink) {
        resumeLinkedinLink.href = SITE_CONFIG.social.linkedin;
    }
    
    const resumeDownloadLink = document.getElementById('resume-download-link');
    if (resumeDownloadLink) {
        resumeDownloadLink.href = SITE_CONFIG.assets.resume;
    }
    
    // Contact Email
    const contactEmailLink = document.getElementById('contact-email-link');
    if (contactEmailLink) {
        contactEmailLink.href = `mailto:${SITE_CONFIG.social.email}`;
    }
    
    // Copyright
    const copyrightText = document.getElementById('copyright-text');
    if (copyrightText) {
        copyrightText.textContent = `© ${SITE_CONFIG.copyright}.`;
    }
    
    // Header Name
    const headerName = document.getElementById('header-name');
    if (headerName) {
        headerName.textContent = SITE_CONFIG.personal.name;
    }
}

// Run initialization when DOM is ready
document.addEventListener('DOMContentLoaded', initializePage);
