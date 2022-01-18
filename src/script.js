// Task 1

// const elemOl = document.getElementById("elem");

// const clear = (arr) => {
//   while (arr.length) {
//     arr[0].remove();
//   }
// };

// clear(elemOl.children);

// Task 2

// const list = document.getElementById("list");
// const addBtn = document.getElementById("add-btn");

// const setValue = (value, elem) => {
//   if (value) {
//     elem.textContent = value;
//     return elem;
//   }

//   return false;
// };

// addBtn.addEventListener("click", () => {
//   const value = prompt("Введите содержимое пункта");
//   const li = document.createElement("li");

//   const result = setValue(value, li);

//   if (result) {
//     list.append(result);
//   }
// });

// Task 4

// const data = {
//   Рыбы: {
//     форель: {},
//     лосось: {},
//   },

//   Деревья: {
//     Огромные: {
//       секвойя: {},
//       дуб: {},
//     },
//     Цветковые: {
//       яблоня: {},
//       магнолия: {},
//     },
//   },
// };

// const isEmpty = (obj) => {
//   for (const key in obj) {
//     return false;
//   }

//   return true;
// };

// const ulContainer = document.createElement("ul");

// const createTree = (container, data) => {
//   for (const key in data) {
//     if (typeof data[key] === "object") {
//       const li = document.createElement("li");
//       li.textContent = key;
//       container.append(li);
//       if (!isEmpty(data[key])) {
//         const ul = document.createElement("ul");
//         li.append(createTree(ul, data[key]));
//       }
//     }
//   }
//   return container;
// };

// createTree(ulContainer, data);
// document.body.append(ulContainer);

// Task 5

// const li = document.querySelectorAll("li");

// const liArr = Array.from(li);

// liArr.forEach((elem) => {
//   elem.dataset.value = elem.querySelectorAll("li").length;
//   if (elem.dataset.value !== "0") {
//     elem.firstChild.textContent = `${elem.firstChild.textContent}[${elem.dataset.value}]`;
//   }
// });

// Task 6

// const createCalendar = (cal, year, month) => {
//   const date1 = new Date(year, --month);
//   const date2 = new Date(year, ++month);
//   const days = Math.round((date2 - date1) / 1000 / 3600 / 24);
//   let firstDay = date1.getDay();

//   if (firstDay === 0) {
//     firstDay = 7;
//   }

//   cal.innerHTML =
//     "<tbody><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr></tbody>";

//   for (let i = 0; i < 6; i++) {
//     const tr = document.createElement("tr");
//     for (let y = 0; y < 7; y++) {
//       const td = document.createElement("td");
//       tr.append(td);
//       cal.append(tr);
//     }
//   }

//   document.body.append(cal);

//   const cells = document.querySelectorAll("td");

//   let cnt = 1;

//   for (let i = firstDay - 1; i < cells.length; i++) {
//     cells[i].textContent = cnt;
//     cnt++;
//     if (cnt > days) {
//       break;
//     }
//   }
// };

// createCalendar(document.createElement("table"), 2022, 3);

// Task 7

// const div = document.createElement("div");
// div.innerHTML = `<span class="hour">hh:</span><span class="minutes">mm:</span><span class="seconds">ss</span>`;
// const startBtn = document.createElement("button");
// const stopBtn = document.createElement("button");
// startBtn.textContent = "start";
// stopBtn.textContent = "stop";
// document.body.append(div);
// document.body.append(startBtn);
// document.body.append(stopBtn);

// let timer;

// startBtn.addEventListener("click", () => {
//   timer = setInterval(() => {
//     const date = new Date();
//     div.innerHTML = `<span class="hour">${date.getHours()}:</span><span class="minutes">${date.getMinutes()}:</span><span class="seconds">${
//       date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
//     }</span>`;
//   }, 1000);
// });

// stopBtn.addEventListener("click", () => {
//   clearInterval(timer);
// });

// Task 8

// document
//   .getElementById("one")
//   .insertAdjacentHTML("afterend", "<li>2</li><li>3</li>");

// Task 9

const table = document.getElementById("table");

const nameSort = document.getElementById("name");

nameSort.addEventListener("click", () => {
  const trArr = document.querySelectorAll("tr");
  const arr = Array.from(trArr);
  arr.splice(0, 1);

  const sortArr = arr.sort((a, b) => {
    if (a.firstElementChild.textContent < b.firstElementChild.textContent) {
      return -1;
    }
    if (a.firstElementChild.textContent < b.firstElementChild.textContent) {
      return 1;
    }
    return 0;
  });

  table.tBodies[0].append(...sortArr);
});
