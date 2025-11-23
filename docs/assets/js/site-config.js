/**
 * Site Configuration
 * Auto-generated from site-config.json
 * This file is loaded by all pages to provide navigation and social media links
 */

const SITE_CONFIG = {
    siteName: "Build a Startup in a Day",
    siteUrl: "https://buildly-release-management.github.io/startupinaday",
    description: "Brought to you by Buildly and Korgi",
    navigation: [
    {
        "title": "Home",
        "url": "index.html"
    },
    {
        "title": "About",
        "url": "about.html"
    },
    {
        "title": "Services",
        "url": "services.html"
    },
    {
        "title": "Blog",
        "url": "blog.html"
    },
    {
        "title": "Contact",
        "url": "contact.html"
    }
],
    social: {
    "twitter": "",
    "linkedin": "",
    "facebook": "",
    "github": ""
},
    currentYear: new Date().getFullYear()
};

/**
 * Initialize navigation on page load
 */
function initNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Update active state in navigation
    SITE_CONFIG.navigation.forEach(item => {
        item.active = item.url === currentPage;
    });
}

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

/**
 * Initialize page
 */
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    
    // Update copyright year if element exists
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = SITE_CONFIG.currentYear;
    }
});
