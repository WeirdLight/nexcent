export function burgerMenu() {
    const burgerMenu = document.querySelector('#menu-list');
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        burgerMenu.classList.toggle('open');
    });
}