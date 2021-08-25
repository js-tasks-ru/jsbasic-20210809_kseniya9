function highlight(table) {
  let rows = Array.from(table.rows);
  for (let i = 1; i < rows.length; i++) {
    if (rows[i].cells[3].dataset.available === "true") {
      rows[i].classList.add("available");
    }
    if (rows[i].cells[3].dataset.available === "false") {
      rows[i].classList.add("unavailable");
    }
    if (!rows[i].cells[3].dataset.available) {
      rows[i].setAttribute("hidden", "true");
    }
    if (rows[i].cells[2].innerHTML === "m") {
      rows[i].classList.add("male");
    }
    if (rows[i].cells[2].innerHTML === "f") {
      rows[i].classList.add("female");
    }
    if (rows[i].cells[1].innerHTML < 18) {
      rows[i].style.textDecoration = "line-through";
    }
  }
}
