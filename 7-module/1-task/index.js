import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();
  }
  render() {
    const ribbon = document.createElement("div");
    ribbon.className = "ribbon";
    const ribbonInner = document.createElement("div");
    ribbonInner.className = "ribbon__inner";
    for (let category of this.categories) {
      let ribbonItem = createElement(`
      <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>
      `);
      ribbonInner.append(ribbonItem);
    }
    const arrowRight = createElement(`
      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `);
    const arrowLeft = createElement(`
      <button class="ribbon__arrow ribbon__arrow_left">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `);
    ribbon.append(arrowLeft, ribbonInner, arrowRight);
    ribbon.addEventListener("click", this.onClick);

    ribbonInner.addEventListener("scroll", () => {
      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      if (scrollRight === 0) {
        arrowLeft.classList.add("ribbon__arrow_visible");
        arrowRight.classList.remove("ribbon__arrow_visible");
      }
      if (scrollLeft === 0) {
        arrowLeft.classList.remove("ribbon__arrow_visible");
        arrowRight.classList.add("ribbon__arrow_visible");
      }
      if (scrollLeft > 0) {
        arrowLeft.classList.add("ribbon__arrow_visible");
      }
      if (scrollRight > 0) {
        arrowRight.classList.add("ribbon__arrow_visible");
      }
    });
    return ribbon;
  }
  onClick = (event) => {
    let ev = event.target;
    const ribbonInner = document.querySelector(".ribbon__inner");

    if (ev.closest("button")) {
      if (ev.closest("button").classList.contains("ribbon__arrow_left")) {
        ribbonInner.scrollBy(-350, 0);
      }
      if (ev.closest("button").classList.contains("ribbon__arrow_right")) {
        ribbonInner.scrollBy(350, 0);
      }
    }
    if (ev.tagName === "A") {
      const categoryChoice = new CustomEvent("ribbon-select", {
        detail: ev.dataset.id,
        bubbles: true,
      });
      ev.dispatchEvent(categoryChoice);
      console.log(categoryChoice.detail);
    }
  };
}
