const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');
const item4 = document.querySelector('.item4');



openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
item1.addEventListener('click', close);
item2.addEventListener('click', close);
item3.addEventListener('click', close);
item4.addEventListener('click', close);



function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';

}