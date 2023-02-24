/* ================== SHOW MENU =============== */ 
const   navMENU = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/* ============== MENU SHOW ============ */
/* Validate if constant exist */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMENU.classList.add('show-menu')
    })
}

/* ============== MENU HIDDEN ============ */
/* Validate if constant exist */
if(navClose){
    navClose.addEventListener('click', () => {
        navMENU.classList.remove('show-menu')
    })
}

/* ================== SHOW MENU =============== */ 
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* =============== SCROLL UP ============== */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport innerHeight, add the show-scroll class to the tag with the scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)