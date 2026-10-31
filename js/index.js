window.onscroll = function () {
    getSticky();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function getSticky() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}


const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-track img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

function updateCarousel() {
    if (track && slides.length > 0) {
        track.style.transform = `translateX(-${index * 100}%)`;
    }
}

if (track && slides.length > 0) {

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            index = (index + 1) % slides.length;
            updateCarousel();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            index = (index - 1 + slides.length) % slides.length;
            updateCarousel();
        });
    }

    setInterval(() => {
        index = (index + 1) % slides.length;
        updateCarousel();
    }, 5000);
}


const sobreSlides = document.querySelectorAll(".sobre-bg-slide");

let sobreIndex = 0;

if (sobreSlides.length > 1) {

    setInterval(() => {

        sobreSlides[sobreIndex].classList.remove("is-active");

        sobreIndex = (sobreIndex + 1) % sobreSlides.length;

        sobreSlides[sobreIndex].classList.add("is-active");

    }, 5000);
}
