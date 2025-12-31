const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".shoe-card");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

function updateSlider() {
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  updateSlider();
});

window.addEventListener("resize", updateSlider);

updateSlider();
