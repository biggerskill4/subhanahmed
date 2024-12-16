// header menu bar
const openNav = document.querySelector('.mobile-navbar .menu-bar ion-icon');
const closeNav = document.querySelector('.mobile-nav .close ion-icon');
const mobileMenu = document.querySelector('.mobile-nav');


openNav.addEventListener('click', ()=> {
    mobileMenu.style.transform = 'translateX(0)';
});

closeNav.addEventListener('click', ()=> {
    mobileMenu.style.transform = 'translateX(-100%)';
});

document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !openNav.contains(event.target)) {
        mobileMenu.style.transform = 'translateX(-100%)';
    }
});


// Ensure Lenis script is loaded before executing
window.addEventListener('DOMContentLoaded', () => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5,          // Smooth scroll duration
      easing: (t) => t,       // Linear easing (default)
      smooth: true,           // Enable smooth scrolling
      direction: 'vertical',  // Vertical scrolling
      smoothTouch: true,      // Enable smooth touch scrolling
    });

    // Animation frame loop to update Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });