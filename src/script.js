// Task 1

// const thumb = document.querySelector(".thumb");
// const slider = document.getElementById("slider");

// thumb.addEventListener("mousedown", (event) => {
//   event.preventDefault();
//   const shiftX = event.clientX - thumb.getBoundingClientRect().left;

//   function onMouseMove(event) {
//     let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

//     if (newLeft < 0) newLeft = 0;
//     const rightEdge = slider.offsetWidth - thumb.offsetWidth;
//     if (newLeft > rightEdge) newLeft = rightEdge;
//     thumb.style.left = `${newLeft}px`;
//   }

//   document.addEventListener("mousemove", onMouseMove);

//   function offMouseMove() {
//     document.removeEventListener("mousemove", onMouseMove);
//     document.removeEventListener("mouseup", offMouseMove);
//   }

//   document.addEventListener("mouseup", offMouseMove);
// });

// thumb.ondragstart = function () {
//   return false;
// };

// Task 2

const ball = document.getElementById("ball");

document.body.addEventListener("mousedown", (event) => {
  if (event.target.closest(".draggable")) {
    const hero = event.target.closest(".draggable");

    if (event.target.closest("#ball")) {
      hero.style.zIndex = 1000;
    }
    const shiftX = event.clientX - hero.getBoundingClientRect().left;
    const shiftY = event.clientY - hero.getBoundingClientRect().top;

    function onMouseMove(event) {
      let leftNewPosition = event.clientX - shiftX;
      let topNewPosition = event.clientY - shiftY;
      const rightEdge = document.documentElement.clientWidth - hero.offsetWidth;
      const bottomEdge =
        document.documentElement.clientHeight - hero.offsetHeight;

      if (leftNewPosition < 0) {
        leftNewPosition = 0;
      } else if (leftNewPosition > rightEdge) {
        leftNewPosition = rightEdge;
      }

      if (topNewPosition < 0) {
        topNewPosition = 0;
      } else if (topNewPosition > bottomEdge) {
        topNewPosition = bottomEdge;
      }

      hero.style.left = `${leftNewPosition}px`;
      hero.style.top = `${topNewPosition}px`;
      hero.style.position = "absolute";
    }
    document.addEventListener("mousemove", onMouseMove);

    function offMouseMove() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", offMouseMove);
    }

    document.addEventListener("mouseup", offMouseMove);
  }
});

ball.addEventListener("dragstart", (event) => {
  event.preventDefault();
});
