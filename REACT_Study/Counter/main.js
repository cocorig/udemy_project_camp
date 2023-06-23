

const counter = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

// function counterUp() {

//     const current = parseInt(counter.innerText);
//     counter.innerText= current + 1;
// }

// function counterDown() {
//     const current = parseInt(counter.innerText);
//     counter.innerText = current - 1;
// }

const counterUp = () => {
    const current = parseInt(counter.innerText);
    counter.innerText = current + 1;
}
const counterDown = () => {
    const current = parseInt(counter.innerText);
    counter.innerText = current - 1;
}
minus.addEventListener('click', counterDown);
plus.addEventListener('click', counterUp);