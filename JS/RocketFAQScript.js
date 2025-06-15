const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');


const FAQ1 = document.querySelector('.FAQ1');
const Q1 = document.querySelector(`#Q1`);

const FAQ2= document.querySelector('.FAQ2');
const Q2 = document.querySelector(`#Q2`);

const Q1ID = document.getElementById('Q1');
const Q2ID = document.getElementById('Q2');



Q1.addEventListener(`click`, event => {

    FAQ1.classList.toggle('ON');
    Q1ID.classList.toggle('TURN');
});

Q2.addEventListener(`click`, event => {

    FAQ2.classList.toggle('ON');
    Q2ID.classList.toggle('TURN');



  
});





menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});