// Mobile Menu Toggle Script
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!menuButton || !mobileMenu) return;
    
    const navLinks = mobileMenu.querySelectorAll('a');

    // Function to toggle the menu
    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
    };

    // Toggle menu when button is clicked
    menuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when a navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    });

    // Close menu when clicking anywhere else on the page
    document.addEventListener('click', (e) => {
        if (!mobileMenu.classList.contains('hidden') && 
            !menuButton.contains(e.target) && 
            !mobileMenu.contains(e.target)) {
            toggleMenu();
        }
    });
});
