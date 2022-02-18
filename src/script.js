// Task 1

function populate() {
  while (true) {
    const windowMarginBottom =
      document.documentElement.getBoundingClientRect().bottom;
    if (windowMarginBottom < document.documentElement.clientHeight + 100) {
      document.body.insertAdjacentHTML(
        "beforeend",
        `<p>Дата: ${new Date()}</p>`
      );
    } else {
      break;
    }
  }
}

window.addEventListener("scroll", populate);

populate();

// Task 2

// window.addEventListener("scroll", () => {
//   const winodwHeigh = document.documentElement.clientHeight;
//   if (pageYOffset > winodwHeigh) {
//     document.getElementById("arrowTop").style.visibility = "visible";
//     document.getElementById("arrowTop").addEventListener(
//       "click",
//       () => {
//         document.documentElement.scrollTop = 0;
//       },
//       { once: true }
//     );
//   } else {
//     document.getElementById("arrowTop").style.visibility = "hidden";
//   }
// });

// Task 3
// function isVisible(elem) {
//   if (
//     elem.getBoundingClientRect().top < document.documentElement.clientHeight
//   ) {
//     return true;
//   }
//   return false;
// }

// function showVisible() {
//   for (const img of document.querySelectorAll("img")) {
//     let realSrc = img.dataset.src;

//     if (!realSrc) {
//       continue;
//     }

//     if (isVisible(img)) {
//       realSrc += `?nocache=${Math.random()}`;

//       img.src = realSrc;

//       img.dataset.src = "";
//     }
//   }
// }

// window.addEventListener("scroll", showVisible);
// showVisible();
