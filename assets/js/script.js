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



// GSAP and ScrollTrigger
gsap.from("header .row", {
  y: -180, 
  duration: 1,
});


gsap.from(".left-animation", {
  x: "-100%",
  duration: 1,
  ease: "power2",
  scrollTrigger: {
    trigger: ".left-animation",       
    start: "top bottom",          
    end: "top top",                  
    toggleActions: "play reverse restart none", 
  }
});

gsap.from(".right-animation", {
  x: "100%",
  duration: 1,
  ease: "power2",
  scrollTrigger: {
    trigger: ".left-animation",       
    start: "top bottom",          
    end: "top top",                  
    toggleActions: "play reverse restart none", 
  }
});

gsap.from(".left-scroll-animation", {
  opacity: 0,
  x: "-100%",
  duration: 1,
  ease: "power2",
  scrollTrigger: {
    trigger: ".left-scroll-animation",
    start: 'top 90%',
    end: 'bottom top',
    toggleActions: "play none restart reverse"
  }
});

gsap.from(".right-scroll-animation", {
  opacity: 0,
  x: "100%",
  duration: 1,
  ease: "power2",
  scrollTrigger: {
    trigger: ".right-scroll-animation",
    start: 'top 90%',
    end: 'bottom top',
    toggleActions: "play none restart reverse"
  }
});

gsap.from(".top-scroll-animation", {
  opacity: 0,
  y: 500,
  duration: 1,
  ease: "power2",
  scrollTrigger: {
    trigger: ".top-scroll-animation",
    start: 'top bottom',
    end: 'bottom top',
    toggleActions: "play none restart reverse"
  }
});



const clickMe = document.querySelector('.navbar .cta-btn');
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

clickMe.addEventListener('click', () => {
  headings.forEach(heading => {
    if (heading.style.fontFamily === "MonumentExtended") {
      heading.style.fontFamily = "";
    } else {
      heading.style.fontFamily = "MonumentExtended  ";
    }
  });
});