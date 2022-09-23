const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu() {
    //console.log(desktopMenu.classList.contains('inactive'));

    if (desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.remove('inactive');
    } else {
        desktopMenu.classList.add('inactive');
    }
}

/**
 * Implementación del menu para mobile.
 */
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}