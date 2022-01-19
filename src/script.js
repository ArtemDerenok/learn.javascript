// task 2

// let scrollWidth = div.offsetWidth - div.clientWidth;

// Task 3

const field = document.getElementById("field");
const ball = document.getElementById("ball");

console.log(field.offsetWidth);

ball.style.left = `${field.clientWidth / 2 - ball.clientWidth / 2}px`;
ball.style.top = `${field.clientHeight / 2 - ball.clientHeight / 2}px`;
