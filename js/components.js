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
        <a href="${project.link}" class="project-card block py-10 px-10 rounded-3xl shadow-md hover:shadow-xl hover:scale-105 flex flex-col h-full" style="min-height: 300px;">
            <div class="project-card-content flex flex-col flex-1">
                <h3 class="project-title text-2xl font-bold text-gray-100 mb-6">
                    ${project.title}
                </h3>
                <p class="text-lg text-gray-100 mb-4">
                    ${project.description}
                </p>
                <div class="mt-auto">
                    <div class="mb-5" style="height: 2px; background: #c4b5fd; box-shadow: 0 0 8px rgba(196, 181, 253, 0.5); border-radius: 9999px;"></div>
                    <div class="flex flex-wrap gap-3">
                        ${toolBadges}
                    </div>
                </div>
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
 * Generate About Section
 */
function generateAboutSection() {
    const about = SITE_CONFIG.about;
    return `
        <div class="max-w-8xl mx-auto px-10 relative">
            <!-- Welcome Badge -->
            <div class="flex justify-center mb-20">
                <div class="flex flex-col items-center">
                    <svg class="w-24 h-24 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p class="text-gray-100 text-2xl font-bold mt-3">${about.welcome}</p>
                </div>
            </div>
            <div class="mt-20">
                <h2 class="text-5xl md:text-6xl font-bold text-gray-100 text-center">${about.greeting}</h2>
                <p class="text-2xl md:text-3xl text-gray-100 text-center mt-8">${about.subtitle}</p>
            </div>
            <!-- Centered border element -->
            <div class="w-24 h-1 bg-gray-100 mx-auto mt-10 mb-10"></div> 
            
            ${about.paragraphs.map((p) => `
                <p class="text-lg md:text-2xl text-gray-100 leading-relaxed text-center max-w-3xl mx-auto mt-6">
                    ${p}
                </p>
            `).join('')}

            <!-- New Social Icons Container -->
            <div id="about-social" class="flex justify-center items-center gap-x-8 mt-20">
                ${generateSocialIcons(SITE_CONFIG.social, 'w-9 h-9')}
            </div>

            <!-- Scroll Down Indicator -->
            <div class="flex justify-center mt-48">
                <a href="#experience" class="scroll-indicator cursor-pointer">
                    <svg class="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </a>
            </div>
        </div>
    `;
}

/**
 * Generate Resume Section
 */
function generateResumeSection() {
    const resume = SITE_CONFIG.resume;
    return `
        <div class="max-w-4xl mx-auto mb-12">
            <div class="exp-gradient-spawn p-12 rounded-3xl" style="background: rgba(196, 181, 253, 0.1); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);">
                <div class="space-y-8">
                    <!-- Row 1: Education and Location -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 class="text-3xl font-bold text-purple-300 mb-4 flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                                Education
                            </h3>
                            <p class="text-gray-200 font-semibold text-xl">${resume.education.university}</p>
                            <p class="text-gray-300 text-lg">${resume.education.program}</p>
                            <p class="text-gray-400 text-base">${resume.education.graduation}</p>
                        </div>
                        
                        <div>
                            <h3 class="text-3xl font-bold text-purple-300 mb-4 flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Locations
                            </h3>
                            ${resume.location.lines.map(line => `
                                <p class="text-gray-300 text-lg">${line}</p>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Row 2: Contact and Links -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 class="text-3xl font-bold text-purple-300 mb-4 flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Contact Information
                            </h3>
                            <p class="text-gray-300 text-lg">${resume.contact.email}</p>
                            ${resume.contact.phones.map(phone => `
                                <p class="text-gray-300 text-lg flex items-center gap-2">
                                    <span class="font-bold text-purple-300">${phone.country}</span>
                                    ${phone.number}
                                </p>
                            `).join('')}
                        </div>
                        
                        <div>
                            <h3 class="text-3xl font-bold text-purple-300 mb-4 flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                                Links
                            </h3>
                            ${resume.links.map(link => `
                                <a href="${link.url}" target="_blank" class="resume-link text-gray-300 text-lg flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        ${ICONS[link.icon]}
                                    </svg>
                                    ${link.name}
                                </a>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="flex justify-center">
            <a href="${SITE_CONFIG.assets.resume}" target="_blank" class="download-resume-button inline-block px-16 py-8 rounded-3xl font-bold text-2xl transition-all relative overflow-hidden" style="background: rgba(196, 181, 253, 0.15); color: #c4b5fd; backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);">
                <span class="button-text">Download Resume</span>
                <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
            </a>
        </div>
    `;
}

/**
 * Generate Contact Section
 */
function generateContactSection() {
    const contact = SITE_CONFIG.contact;
    return `
        <h2 class="text-7xl font-bold text-gray-100 text-center">${contact.heading}</h2>
        <!-- Centered border element -->
        <div class="w-24 h-1 bg-gray-200 mx-auto mt-6 mb-16"></div>

        <p class="text-3xl text-gray-100 leading-relaxed mb-6 text-center">
            ${contact.description}
        </p>
        <!-- Social Icons -->
        <div id="contact-social" class="flex justify-center items-center gap-x-8 mt-20">
            ${generateSocialIcons(SITE_CONFIG.social, 'w-9 h-9')}
        </div>
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
    
    // About Section
    const aboutContent = document.getElementById('about-content');
    if (aboutContent) {
        aboutContent.innerHTML = generateAboutSection();
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
    
    // Resume Section
    const resumeContent = document.getElementById('resume-content');
    if (resumeContent) {
        resumeContent.innerHTML = generateResumeSection();
    }
    
    // Contact Section
    const contactContent = document.getElementById('contact-content');
    if (contactContent) {
        contactContent.innerHTML = generateContactSection();
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

