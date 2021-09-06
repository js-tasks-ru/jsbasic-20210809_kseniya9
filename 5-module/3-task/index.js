function initCarousel() {
  const innerCarousel = document.querySelector(".carousel__inner");
  const slide = document.querySelector(".carousel__slide");
  const carouselSlides = document.querySelectorAll(".carousel__slide");
  const arrowRight = document.querySelector(".carousel__arrow_right");
  const arrowLeft = document.querySelector(".carousel__arrow_left");
  let carouselOffset = 0;
  let slideNumber = 1;
  arrowLeft.style.display = "none";
  arrowRight.addEventListener("click", function () {
    if (slideNumber < carouselSlides.length) {
      innerCarousel.style.transform = `translateX(-${(carouselOffset +=
        slide.offsetWidth)}px)`;
      arrowLeft.style.display = "";
      slideNumber++;
    }
    if (slideNumber == carouselSlides.length) {
      this.style.display = "none";
    }
  });
  arrowLeft.addEventListener("click", function () {
    if (slideNumber > 0) {
      innerCarousel.style.transform = `translateX(-${(carouselOffset -=
        slide.offsetWidth)}px)`;
      arrowRight.style.display = "";
      slideNumber--;
    }
    if (slideNumber == 1) {
      this.style.display = "none";
    }
  });
}
