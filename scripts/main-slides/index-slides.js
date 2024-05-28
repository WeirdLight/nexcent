import { changingSlides } from './changingSlides.js';

export function handleFooter() {
    let firstSlide = document.querySelector('.s1');
    firstSlide.classList.add('new-slide');

    const circle = document.querySelectorAll(".circle");
    for (let i = 0; i < 3; i++) {
        circle[i].addEventListener('click', () => {
            changingSlides(i);
        });
    }
}