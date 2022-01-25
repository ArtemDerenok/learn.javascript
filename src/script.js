// Task 2

// const content = document.getElementById("contents");

// content.addEventListener("click", (event) => {
//   if (!event.target.closest("A")) {
//     return;
//   }

//   const question = confirm("Вы действительно хотите перейти по ссылке?");
//   if (!question) {
//     event.preventDefault();
//   }
// });

// Task 3

const largeImage = document.getElementById("largeImg");
const thumb = document.getElementById("thumbs");

thumb.addEventListener("click", (event) => {
  if (!event.target.closest("A")) {
    return;
  }
  largeImage.src = event.target.parentElement.href;
  event.preventDefault();
});
