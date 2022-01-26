// Task 1

const house = document.getElementById("house");
const tooltip = document.createElement("div");
let currentElement = null;

house.addEventListener("mouseover", (event) => {
  if (event.relatedTarget === currentElement) {
    return;
  }
  if (event.target.tagName === "DIV" || event.target.tagName === "A") {
    tooltip.textContent = event.target.dataset.tooltip;
    tooltip.classList.add("tooltip");
    event.target.after(tooltip);
    currentElement = event.target;
  }
});

house.addEventListener("mouseout", (event) => {
  if (event.relatedTarget.parentElement === currentElement) {
    return;
  }
  tooltip.remove();
  currentElement = null;
});
