const slider = document.getElementsByClassName("slider");
const sliderCt = document.getElementsByClassName("slider_content");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const autoBtn = document.querySelector(".auto");
let currentSlide = 0;
let beforeSlide = 0;
let sliderCts = Array.from(sliderCt);
let auto = false;
let autoPlay;
function changeSlide(before, curr) {
  sliderCts[before].classList.remove("showing");
  sliderCts[curr].classList.add("showing");
}

function handleAutoBtn() {
  autoPlay = window.setInterval(handleNextBtn, 2000);
  autoPlay;
  autoBtn.removeEventListener("click", handleAutoBtn);
  autoBtn.addEventListener("click", handleAutoBtnStop);
}
function handleAutoBtnStop() {
  console.log("hi");
  window.clearInterval(autoPlay);
}

function handleNextBtn() {
  //   if (!auto) {
  //     clearInterval(autoPlay);
  //   }
  if (currentSlide == 4) {
    beforeSlide = currentSlide;
    currentSlide = 0;
  } else {
    beforeSlide = currentSlide;
    currentSlide += 1;
  }
  changeSlide(beforeSlide, currentSlide);
}

function handlePrevBtn() {
  if (currentSlide == 0) {
    beforeSlide = currentSlide;
    currentSlide = 4;
  } else {
    beforeSlide = currentSlide;
    currentSlide -= 1;
  }
  changeSlide(beforeSlide, currentSlide);
}
if (prevBtn) {
  prevBtn.addEventListener("click", handlePrevBtn);
}
if (nextBtn) {
  nextBtn.addEventListener("click", handleNextBtn);
}

if (autoBtn) {
  autoBtn.addEventListener("click", handleAutoBtn);
}
