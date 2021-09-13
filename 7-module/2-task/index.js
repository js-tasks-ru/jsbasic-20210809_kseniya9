import createElement from "../../assets/lib/create-element.js";

export default class Modal {
  constructor() {
    this.modal = this.render();
  }
  render() {
    const modal = createElement(`
    <div class="modal">
      <div class="modal__overlay"></div>
      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
          <h3 class="modal__title">
          Вот сюда нужно добавлять заголовок
          </h3>
        </div>
        <div class="modal__body">
        A сюда нужно добавлять содержимое тела модального окна
        </div>
      </div>
    </div>
    `);
    return modal;
  }
  open() {
    document.body.classList.add("is-modal-open");
    document.addEventListener("keydown", this.onKeydown);
    document.addEventListener("click", this.onClick);

    return document.body.append(this.modal);
  }
  setTitle(title) {
    this.modal.querySelector(".modal__title").innerHTML = title;
  }
  setBody(body) {
    this.modal.querySelector(".modal__body").innerHTML = ``;
    this.modal.querySelector(".modal__body").append(body);
  }
  close = () => {
    document.body.classList.remove("is-modal-open");
    document.removeEventListener("click", this.onClick);
    document.removeEventListener("keydown", this.onKeydown);
    this.modal.remove();
  };
  onKeydown = (event) => {
    if (event.code === "Escape") {
      this.close();
    }
  };
  onClick = (event) => {
    if (event.target.closest("button").classList.contains("modal__close")) {
      this.close();
    }
  };
}
