export function changingSliders() {
    let active = document.querySelector('.active');

    let oldSlide = document.querySelector(`.${active.id}`);
    let newSlide = document.querySelector(`.${circle[count].id}`);
    let secondSlide = document.querySelector('.s2');

    oldSlide.className = `container ${active.id}`;
    newSlide.className = `container ${circle[count].id}`;
    secondSlide.className = `container s2`;
    console.log(active.id, circle[count].id);
    if (Number(active.id.slice(1, 2)) == Number(circle[count].id.slice(1, 2)) + 1) {
        oldSlide.classList.add('reverse-old');
        newSlide.classList.add('new-slide');
    }
    else if (Number(active.id.slice(1, 2)) + 2 == Number(circle[count].id.slice(1, 2))) {
        oldSlide.classList.add('remove-slide');
        secondSlide.classList.add('new-slide');
        setTimeout(() => {
            secondSlide.classList.add('remove-slide');
            newSlide.classList.add('new-slide');
        }, 500);
    }
    else if (Number(active.id.slice(1, 2)) - 2 == Number(circle[count].id.slice(1, 2))) {
        oldSlide.classList.add('reverse-old');
        newSlide.classList.add('remove-slide');
        secondSlide.classList.add('new-slide');
        setTimeout(() => {
            secondSlide.classList.add('reverse-old');
            newSlide.classList.remove('remove-slide');
            newSlide.classList.add('new-slide');
        }, 500);
    }
    else {
        oldSlide.classList.add('remove-slide');
        newSlide.classList.add('new-slide');
    }
    active.classList.remove('active');
    circle[count].classList.add('active');

    count = count + 1 == 3 ? 0 : count + 1;

    let interval = () => { setInterval(changingSliders, 5000) };
    interval();
}
