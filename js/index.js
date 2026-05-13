window.onscroll = function() {getSticky()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function getSticky() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// ===== CARROSSEL =====

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-track img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});

// autoplay
setInterval(() => {
  index = (index + 1) % slides.length;
  updateCarousel();
}, 5000);