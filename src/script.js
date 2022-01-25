// Task 1

// const container = document.getElementById("container");

// container.addEventListener("click", (event) => {
//   if (event.target.tagName !== "BUTTON") {
//     return;
//   }
//   const pane = event.target.closest("div");
//   pane.remove();
// });

// Task 2

// const tree = document.getElementById("tree");

// console.dir(tree);

// tree.addEventListener("click", (event) => {
//   if (event.target.tagName !== "LI") {
//     return;
//   }
//   if (event.target.firstElementChild) {
//     event.target.firstElementChild.hidden =
//       !event.target.firstElementChild.hidden;
//   }
// });

// tree.addEventListener("mousemove", (event) => {
//   if (event.target.tagName !== "LI") {
//     return;
//   }
//   event.target.classList.add("bold");
// });

// tree.addEventListener("mouseout", (event) => {
//   if (event.target.tagName !== "LI") {
//     return;
//   }
//   event.target.classList.remove("bold");
// });

// Task 3

// const table = document.getElementById("grid");
// const tbody = document.querySelector("tbody");

// const sortNames = (names) => {
//   const array = Array.from(names);
//   const result = array.sort((a, b) => {
//     if (a.lastElementChild.textContent > b.lastElementChild.textContent) {
//       return 1;
//     }
//     if (a.lastElementChild.textContent < b.lastElementChild.textContent) {
//       return -1;
//     }
//     return 0;
//   });
//   return result;
// };

// const sortAges = (ages) => {
//   const array = Array.from(ages);
//   const result = array.sort((a, b) => {
//     return +a.firstElementChild.textContent - +b.firstElementChild.textContent;
//   });
//   return result;
// };

// table.addEventListener("click", (event) => {
//   if (event.target.tagName !== "TH") {
//     return;
//   }

//   if (event.target.dataset.type === "string") {
//     tbody.append(...sortNames(document.querySelectorAll("tbody tr")));
//   }

//   if (event.target.dataset.type === "number") {
//     tbody.append(...sortAges(document.querySelectorAll("tbody tr")));
//   }
// });

// Task 4

document.addEventListener("mouseover", (event) => {
  if (event.target.tagName !== "BUTTON") {
    return;
  }

  const span = document.createElement("span");
  span.classList.add("tooltip");
  span.innerHTML = event.target.dataset.tooltip;
  const coord = event.target.getBoundingClientRect();

  span.style.left = `${coord.x}px`;
  span.style.top = `${coord.bottom + 5}px`;
  document.body.append(span);
});

document.addEventListener("mouseout", (event) => {
  if (event.target.tagName !== "BUTTON") {
    return;
  }

  const span = document.querySelector("span");
  span.remove();
});
