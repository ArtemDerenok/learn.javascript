// Task 1

// const viewDiv = document.getElementById("view");
// const textArea = document.createElement("textarea");

// viewDiv.addEventListener("click", function () {
//   this.replaceWith(textArea);
//   textArea.classList.add("edit");
//   textArea.value = this.textContent;
//   textArea.focus();
// });

// textArea.addEventListener("blur", function () {
//   viewDiv.textContent = this.value;
//   this.replaceWith(viewDiv);
// });

// Task 2

// const table = document.getElementById("bagua-table");
// const textArea = document.createElement("textarea");
// const buttonOkey = document.createElement("button");
// const cancelButton = document.createElement("button");
// buttonOkey.textContent = "OK";
// cancelButton.textContent = "CANCEL";

// function addTextArea(event) {
//   const td = event.target.closest("td");
//   let oldInnerHtml = "";
//   if (td) {
//     textArea.value = td.innerHTML;
//     oldInnerHtml = td.innerHTML;
//     td.replaceChildren(textArea);
//     td.append(buttonOkey);
//     td.append(cancelButton);
//     buttonOkey.addEventListener(
//       "click",
//       () => {
//         td.innerHTML = textArea.value;
//         table.addEventListener("click", addTextArea);
//       },
//       { once: true }
//     );
//     cancelButton.addEventListener(
//       "click",
//       () => {
//         td.innerHTML = oldInnerHtml;
//         table.addEventListener("click", addTextArea);
//       },
//       { once: true }
//     );
//     table.removeEventListener("click", addTextArea);
//   }
// }

// table.addEventListener("click", addTextArea);

// Task 3

const mouse = document.getElementById("mouse");

const move = (event) => {
  mouse.style.position = "absolute";
  console.log(event);
  if (event.key === "ArrowRight") {
    mouse.style.left = `${mouse.getBoundingClientRect().left + 100}px`;
  } else if (event.key === "ArrowLeft") {
    mouse.style.left = `${mouse.getBoundingClientRect().left - 100}px`;
  } else if (event.key === "ArrowUp") {
    mouse.style.top = `${mouse.getBoundingClientRect().top - 100}px`;
  } else if (event.key === "ArrowDown") {
    mouse.style.top = `${mouse.getBoundingClientRect().top + 100}px`;
  }
  mouse.addEventListener(
    "blur",
    () => {
      mouse.removeEventListener("keyup", move);
      mouse.addEventListener(
        "click",
        () => {
          mouse.focus();
          mouse.addEventListener("keyup", move);
        },
        { once: true }
      );
    },
    { once: true }
  );
};

mouse.addEventListener(
  "click",
  () => {
    mouse.focus();
    mouse.addEventListener("keyup", move);
  },
  { once: true }
);
