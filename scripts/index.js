
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let intervalId = null;
document.getElementById("prev").addEventListener("click", prevSlide);
document.getElementById("next").addEventListener("click", nextSlide);


document.addEventListener("DOMContentLoaded", initializeSlider);
console.log(slides);
function initializeSlider(){
    if(slides.length > 0){
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
}
}
function ShowSlide(index){
    if(index >= slides.length){
        index = 0;

    } 
    else if(index < 0) {
        index = slides.length - 1;
    }

    slideIndex = index;

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    ShowSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    ShowSlide(slideIndex);
}

function toggleJoinUsMenu(icon) {
  icon.classList.toggle("active");
  document.getElementById("joinUsMenu").classList.toggle("open");
}

