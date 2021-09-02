function hideSelf() {
  const btnHide = document.querySelector(".hide-self-button");
  btnHide.addEventListener("click", function () {
    this.setAttribute("hidden", "");
  });
}
