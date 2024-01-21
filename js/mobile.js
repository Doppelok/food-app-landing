const mobileMenu = document.querySelector('.mobile-menu-container');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const linkMenu = document.querySelectorAll('.js-link');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);
linkMenu.forEach((link) => link.addEventListener('click', toggleMenu));