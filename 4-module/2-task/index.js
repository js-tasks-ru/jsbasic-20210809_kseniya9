function makeDiagonalRed(table) {
  let rows = Array.from(table.rows);
  for (let i = 0; i < rows.length; i++) {
    rows[i].cells[i].style.backgroundColor = "red";
  }
}
