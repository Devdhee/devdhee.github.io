const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const items = document.querySelectorAll('.item');

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
items.forEach(function(item, index) {
    item.addEventListener('click', close);
})

items.forEach((item) => {
    document.querySelector('.item.active');
    item.addEventListener('click', () => {
        document.querySelector('.item.active').classList.remove('active');
        item.classList.add("active");
    });
});