/* variables */
const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const logo = document.querySelector('#navbar__logo');


// functions
const menuActive = () => {
    mobileMenu.classList.toggle('is-active');
    menuLinks.classList.toggle('is-active');
}

// Invokes
mobileMenu.addEventListener('click', menuActive);
// links.addEventListener('click', closedNav);


const highlightMenuItem = () => {
// Show Active Menu When Scrolling
const sect = document.querySelector('.hightlight');
const homepage = document.querySelector('#home-page');
const about = document.querySelector('#about-page');
const portfolio = document.querySelector('#portfolio-page');
let screenPos = window.scrollY;
// console.log(window.scrollY) 

// Adding highlight class to menu item
        if (window.innerWidth > 1120 && screenPos < 525){
            homepage.classList.add('highlight');
            about.classList.remove('highlight');
            return
        } else if (window.innerWidth > 1120 && screenPos < 1667){
            homepage.classList.remove('highlight');
            portfolio.classList.remove('highlight');
            about.classList.add('highlight');
            return
        } else if (window.innerWidth > 1120 && screenPos < 3120){
            about.classList.remove('highlight');
            homepage.classList.remove('highlight');
            portfolio.classList.add('highlight');
            return
        } else {
            about.classList.remove('highlight');
            homepage.classList.remove('highlight');
            portfolio.classList.remove('highlight');
        }

        if (sect && window.innerWidth < 1120 && screenPos < 525 || sect) {
            sect.classList.remove('highlight');
        }
    }

    window.addEventListener('scroll', highlightMenuItem);
    window.addEventListener('click', highlightMenuItem);

// hide mobile menu when clicking on menu item
const hideMobileMenu = () => {
    const menu = document.querySelector('.is-active');
    if (window.innerWidth <= 1120 && menu) {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('is-active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
logo.addEventListener('click', hideMobileMenu);