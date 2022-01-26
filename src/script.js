const list = document.getElementById("ul");

const deleteSelection = () => {
  const liArr = document.querySelectorAll("li");

  for (const elem of liArr) {
    elem.classList.remove("selected");
  }
};

list.addEventListener("click", (event) => {
  if (!event.ctrlKey) {
    deleteSelection();
  }
  if (!event.metaKey) {
    deleteSelection();
  }
  if (event.target.tagName !== "LI") {
    return;
  }
  event.target.classList.add("selected");
});

list.addEventListener("mousedown", (event) => {
  event.preventDefault();
});
