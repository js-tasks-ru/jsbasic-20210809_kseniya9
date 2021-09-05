/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.render();
  }
  render() {
    const table = document.createElement("table");
    for (let row of this.rows) {
      const tableRow = `<tr>
      <td>${row.name}</td>
      <td>${row.age}</td>
      <td>${row.salary}</td>
      <td>${row.city}</td>
      <td><button>X</button></td>
      </tr>`;
      table.insertAdjacentHTML("beforeend", tableRow);
    }
    table.addEventListener("click", function (event) {
      if (event.target.tagName === "BUTTON") {
        event.target.closest("tr").remove();
      }
    });
    return table;
  }
}
