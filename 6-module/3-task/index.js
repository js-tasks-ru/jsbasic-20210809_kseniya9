import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render();
    this.slideNumber = 1;
    this.carouselOffset = 0;
  }
  render() {
    const slider = document.createElement("div");
    slider.className = "carousel";
    const sliderInner = document.createElement("div");
    sliderInner.className = "carousel__inner";
    const arrowLeft = createElement(`
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    `);
    const arrowRight = createElement(`
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    `);
    for (let slide of this.slides) {
      const slideItem = createElement(`
        <div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${
            slide.image
          }" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `);
      sliderInner.append(slideItem);
    }
    slider.append(arrowRight, arrowLeft, sliderInner);

    arrowLeft.style.display = "none";
    slider.addEventListener("click", this.onClick);
    return slider;
  }

  onClick = (event) => {
    let ev = event.target;
    const slidesQuantity = document.querySelectorAll(".carousel__slide").length;
    const innerCarousel = document.querySelector(".carousel__inner");
    const slide = document.querySelector(".carousel__slide");
    const arrowRight = document.querySelector(".carousel__arrow_right");
    const arrowLeft = document.querySelector(".carousel__arrow_left");
    if (ev.closest(".carousel__arrow_right")) {
      if (this.slideNumber < slidesQuantity) {
        innerCarousel.style.transform = `translateX(-${(this.carouselOffset +=
          slide.offsetWidth)}px)`;
        arrowLeft.style.display = "";
        this.slideNumber++;
        console.log(this.carouselOffset);
        console.log(this.slideNumber);
      }
      if (this.slideNumber === slidesQuantity) {
        arrowRight.style.display = "none";
      }
    }

    if (ev.closest(".carousel__arrow_left")) {
      if (this.slideNumber > 0) {
        innerCarousel.style.transform = `translateX(-${(this.carouselOffset -=
          slide.offsetWidth)}px)`;
        arrowRight.style.display = "";
        this.slideNumber--;
      }
      if (this.slideNumber == 1) {
        arrowLeft.style.display = "none";
      }
    }

    if (ev.closest(".carousel__button")) {
      const productAdd = new CustomEvent("product-add", {
        detail: ev.closest(".carousel__slide").dataset.id,
        bubbles: true,
      });
      ev.closest(".carousel__button").dispatchEvent(productAdd);
      console.log(productAdd.detail);
    }
  };
}
