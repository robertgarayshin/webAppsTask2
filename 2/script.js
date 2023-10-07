const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slidesOnPage = 3;
const style1 = window.getComputedStyle(document.querySelector('.slide.first'))
const style2 = window.getComputedStyle(document.querySelector('.slide.second'))
const style3 = window.getComputedStyle(document.querySelector('.slide.third'))


function showSlide(n) {
    let left1 = parseInt(style1.getPropertyValue("left"))
    let left2 = parseInt(style2.getPropertyValue('left'))
    let left3 = parseInt(style3.getPropertyValue('left'))
    console.log(left1, left2, left3)
    if (n == currentSlide - 1) {
        slides[currentSlide].classList.remove('third');
    } 
    else {
        slides[currentSlide].classList.remove('first');
    }
    currentSlide = (n + slides.length) % slides.length;
    if (n == currentSlide - 1) {
        slides[currentSlide].classList.add('third');
    } 
    else {
        slides[currentSlide].classList.add('first');
    }
    window.getComputedStyle(document.querySelector('.slide.first')).setProperty("left", `${left1}px`)
    window.getComputedStyle(document.querySelector('.slide.second')).setProperty("left", `${left2}px`)
    window.getComputedStyle(document.querySelector('.slide.third')).setProperty("left", `${left3}px`)
}

document.getElementById('arrowLeft').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

document.getElementById('arrowRight').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

showSlide(0)