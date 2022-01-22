// Task 1

// const btn = document.getElementById("hider");

// btn.addEventListener("click", () => {
//   document.getElementById("text").hidden = true;
// });

// Task 2

// const btn = document.getElementById("hider");

// btn.addEventListener("click", function hider() {
//   this.hidden = true;
// });

// Task 4

// const field = document.getElementById("field");
// const ball = document.getElementById("ball");

// const checkFieldSize = (num) => {
//   if (num >= field.clientWidth - ball.clientWidth) {
//     return field.clientWidth - ball.clientWidth;
//   }
//   if (num >= field.clientHeight - ball.clientHeight) {
//     return field.clientHeight - ball.clientHeight;
//   }
//   if (num <= 0) {
//     return 0;
//   }
//   return num;
// };

// const caclCoord = (num1, num2) => {
//   const result = num1 - num2 / 2;
//   return checkFieldSize(result);
// };

// field.addEventListener("click", (event) => {
//   console.log(event);
//   ball.style.left = `${caclCoord(event.offsetX, ball.offsetWidth)}px`;
//   ball.style.top = `${caclCoord(event.offsetY, ball.offsetHeight)}px`;
// });

// Task 5

// const showMenuBtn = document.querySelector(".title");

// showMenuBtn.addEventListener("click", () => {
//   showMenuBtn.nextElementSibling.classList.toggle("hidden");
//   document.querySelector(".menu").classList.toggle("open");
// });

// Task 6

// const planes = document.querySelectorAll(".pane");

// planes.forEach((elem) => {
//   elem.firstElementChild.insertAdjacentHTML(
//     "beforeend",
//     '<button class="remove-button">[x]</button>'
//   );
// });

// const btns = document.querySelectorAll(".remove-button");

// btns.forEach((elem) => {
//   elem.addEventListener("click", () => {
//     elem.parentElement.parentElement.remove();
//   });
// });

// Task 7

const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
const list = document.querySelector("ul");
const listElems = document.querySelectorAll("li");

const width = 130;
const count = 3;

let position = 0;

btnNext.addEventListener("click", () => {
  position -= width * count;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.left = `${position}px`;
  console.log(position);
});

btnPrev.addEventListener("click", () => {
  position += width * count;
  position = Math.min(position, 0);
  list.style.left = `${position}px`;
  console.log(position);
});
