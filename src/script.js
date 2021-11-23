// Task 2

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms);
//   });
// }

// delay(3000).then(() => alert("выполнилось через 3 секунды"));

// Task 3

function showCircle(cx, cy, radius) {
  return new Promise((resolve) => {
    const div = document.createElement("div");
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = `${cx}px`;
    div.style.top = `${cy}px`;
    div.className = "circle";
    document.body.append(div);

    setTimeout(() => {
      div.style.width = `${radius * 2}px`;
      div.style.height = `${radius * 2}px`;
    }, 0);
    div.addEventListener("transitionend", function handler() {
      div.removeEventListener("transitionend", handler);
      resolve(div);
    });
  });
}

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  showCircle(150, 150, 100).then((div) => {
    div.classList.add("message-ball");
    div.append("Hello, world!");
  });
});
