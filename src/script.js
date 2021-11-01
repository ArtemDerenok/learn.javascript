const a = +prompt("Number one", 0);
const b = +prompt("Number two", 0);

console.log(a + b);

const readNumber = () => {
  const num = prompt("Введите число", 0);
  if (isNaN(num) || num === "") {
    readNumber();
  } else {
    alert(`Число: ${num}`);
  }
};

readNumber();

const random = (min, max) => {
  return Math.random() * (max - min) + min;
};

console.log(random(1, 5));

const randomIneger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(randomIneger(1, 5));
