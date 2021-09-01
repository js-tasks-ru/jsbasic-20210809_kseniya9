function toggleText() {
  const btnTextHide = document.querySelector(".toggle-text-button");
  const text = document.querySelector("#text");
  btnTextHide.addEventListener("click", function () {
    if (!text.hidden) {
      text.hidden = true;
    } else {
      text.hidden = false;
    }
  });
}
