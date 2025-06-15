const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

const no = document.querySelector('#no');
const yes = document.querySelector('#yes');
const warning = document.querySelector('.warning');


no.addEventListener('click', function () {
    if (no.checked) {
        warning.style.display = "flex";
    }
});

yes.addEventListener('click', function () {
    if (yes.checked) {
        warning.style.display = "none";
    }
});


menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});