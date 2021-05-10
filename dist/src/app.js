/* variables */
const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

// functions
const menuActive = () => {
    mobileMenu.classList.toggle('is-active');
    menuLinks.classList.toggle('is-active');
}

// Invokes
mobileMenu.addEventListener('click', menuActive);