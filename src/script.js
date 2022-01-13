// Task 1

// console.log(document.body.firstElementChild);
// console.log(document.body.children[1]);
// console.log(document.body.children[1].lastElementChild);

// Task 3

const table = document.body.children[2];

const array = Array.from(table.rows);

array.forEach((elem, index) => {
  elem.cells[index].style.backgroundColor = "red";
});
