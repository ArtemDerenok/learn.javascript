function showCircle(cx, cy, radius, callback) {
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

    div.addEventListener("transitionend", () => {
      callback(div);
    });
  }, 0);
}

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  showCircle(150, 150, 100, (div) => {
    const circle = div;
    circle.classList.add("message-ball");
    circle.textContent = "Hello, world";
  });
});
