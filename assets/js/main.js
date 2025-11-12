/* ---
   SECURE PORTFOLIO - MAIN.JS
   Created by Gemini for Muhammad Talha
   --- */

document.addEventListener('DOMContentLoaded', (event) => {
    
    // --- Mobile Menu Code ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            mobileMenuButton.classList.toggle('open');
        });
    }

    // --- NEW: Scroll Animation Code (Triggers Every Time) ---
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When it scrolls INTO view, add the animate class
                entry.target.classList.add('animate');
            } else {
                // When it scrolls OUT of view, remove the class to reset it
                entry.target.classList.remove('animate');
            }
        });
    }, observerOptions);

    // Observe all elements with the class "fade-in"
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});
