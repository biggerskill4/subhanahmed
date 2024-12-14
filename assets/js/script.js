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