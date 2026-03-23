// Scroll progress bar + header border visibility
(function () {
    const progressBar = document.getElementById('scroll-progress-bar');
    const header = document.getElementById('site-header');

    function onScroll() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        if (progressBar) progressBar.style.width = pct + '%';
        if (header) header.classList.toggle('scrolled', scrollTop > 0);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
})();

// Mobile Menu Toggle Script
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    if (!menuButton || !mobileMenu) return;

    const openMenu = () => {
        mobileMenu.classList.remove('hidden');
        hamburgerIcon?.classList.add('hidden');
        closeIcon?.classList.remove('hidden');
    };

    const closeMenu = () => {
        mobileMenu.classList.add('hidden');
        hamburgerIcon?.classList.remove('hidden');
        closeIcon?.classList.add('hidden');
    };

    const toggleMenu = () => {
        mobileMenu.classList.contains('hidden') ? openMenu() : closeMenu();
    };

    menuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Close on nav link click (re-query after JS populates the nav)
    mobileMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') closeMenu();
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!mobileMenu.classList.contains('hidden') &&
            !menuButton.contains(e.target) &&
            !mobileMenu.contains(e.target)) {
            closeMenu();
        }
    });
});
