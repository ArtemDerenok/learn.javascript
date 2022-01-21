// Task 1

// const field = document.getElementById("field");
// const coord = field.getBoundingClientRect();
// const topLeftCoord = coord.top;
// const bottomRightCoord = coord.right;
// const topLeftInterCoord = coord.top + field.clientTop;
// const bottomRightInterCoord = coord.top + coord.height - field.clientTop;
// console.log(topLeftCoord);
// console.log(bottomRightCoord);
// console.log(topLeftInterCoord);
// console.log(bottomRightInterCoord);

// Task 2

function getCoords(elem) {
  const box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}

function positionAt(anchor, position, elem) {
  const coord = getCoords(anchor);
  anchor.append(elem);
  elem.style.position = "absolute";
  if (position === "top") {
    elem.style.top = `0px`;
    elem.style.left = `${-anchor.clientLeft}px`;
  }
  if (position === "right") {
    elem.style.left = `${
      anchor.offsetWidth - elem.offsetWidth - anchor.clientLeft
    }px`;
    elem.style.top = `0px`;
  }
  if (position === "bottom") {
    elem.style.top = `${anchor.offsetHeight - elem.offsetHeight}px`;
    elem.style.left = `${-anchor.clientLeft}px`;
  }
}

function showNote(anchor, position, html) {
  const note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

const blockquote = document.querySelector("blockquote");

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");
