const btn = document.querySelector('button');
// btn.onmouseenter = function () {
//     btn.style.cssText = 'background:red;color:#fff;';
// }

// function changeBg() {
//     btn.style.background = 'blue';
//     btn.style.color = 'yellow';
// }

// btn.onmouseleave = changeBg;

const card = document.querySelector('.card');
btn.addEventListener('click', function () {
    card.classList.toggle('active');
})


document.querySelector('.btn-close').addEventListener('click', function () {
    card.classList.remove('active');
})