const bgItems = document.querySelectorAll('.slide-bg__link');
const imageSlides = document.querySelectorAll('.slide-bg__inner');
const slideBg = document.querySelector('.slide-bg');
const shapes = document.querySelectorAll('.shapes__content');
const shapesSlides = document.querySelectorAll('.shapes__item');
const helperInput = document.querySelector('#helper-input');
const mouse = document.querySelector('.mouse');
const links = document.querySelectorAll('a');
const mainSection  = document.querySelector('.main-section');

const slidesCount = 5;
let slideCounter = 1;
const easing = BezierEasing(0.770, 0.125, 0.265, 1.040);

const startComplete = () => {
        imageSlides.forEach(el => {
            el.style.opacity = 1;
        })
        shapesSlides.forEach(el => {
            el.style.opacity = 1;
        })
}

const stratingTl = gsap.timeline({default: { easing: easing}, onComlete: startComplete})

