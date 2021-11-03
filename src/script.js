// const camelize = (str) => {
//   const arr = str.split("-");
//   const result = arr.map((elem, index) => {
//     let elemCopy = elem;
//     if (index) {
//       elemCopy = elemCopy[0].toUpperCase() + elemCopy.slice(1);
//     }
//     return elemCopy;
//   });
//   return result.join("");
// };

// console.log(camelize("background-color"));

// const filterRange = (arr, a, b) => {
//   const result = arr.filter((elem) => elem >= a && elem <= b);
//   return result;
// };

// const arr = [5, 3, 8, 1];

// const filtered = filterRange(arr, 1, 4);

// console.log(filtered);
// console.log(arr);

// const filterRangeInPlace = (arr, a, b) => {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] < a || arr[i] > b) {
//       arr.splice(i, 1);
//       i -= 1;
//     }
//   }
// };

// const arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4);

// console.log(arr);

// const arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// console.log(arr);

// const arr = ["HTML", "JavaScript", "CSS"];

// const copySorted = (array) => {
//   const copy = array.concat();
//   return copy.sort();
// };

// const sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);

// function Calculator() {
//   this.methods = {
//     "+": (a, b) => a + b,
//     "-": (a, b) => a - b,
//   };

//   this.calculate = (str) => {
//     const array = str.split(" ");
//     let num = 0;
//     if (array[1] === "+") {
//       num = this.methods["+"](+array[0], +array[2]);
//     } else if (array[1] === "-") {
//       num = this.methods["-"](+array[0], +array[2]);
//     } else if (array[1] === "*") {
//       num = this.methods["*"](+array[0], +array[2]);
//     } else if (array[1] === "/") {
//       num = this.methods["/"](+array[0], +array[2]);
//     } else if (array[1] === "**") {
//       num = this.methods["**"](+array[0], +array[2]);
//     }
//     return num;
//   };

//   this.addMethod = (name, func) => {
//     this.methods[name] = func;
//   };
// }

// const calc = new Calculator();

// let powerCalc = new Calculator();
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// console.log( result ); // 8

// const vasya = { name: "Вася", age: 25 };
// const petya = { name: "Петя", age: 30 };
// const masha = { name: "Маша", age: 28 };

// const users = [vasya, petya, masha];

// const names = users.map((elem) => elem.name);
// console.log(names);

// const vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// const petya = { name: "Петя", surname: "Иванов", id: 2 };
// const masha = { name: "Маша", surname: "Петрова", id: 3 };

// const users = [vasya, petya, masha];

// const usersMapped = users.map((elem) => {
//   return {
//     fullName: `${elem.name} ${elem.surname}`,
//     id: elem.id,
//   };
// });

// console.log(usersMapped);

// const vasya = { name: "Вася", age: 25 };
// const petya = { name: "Петя", age: 30 };
// const masha = { name: "Маша", age: 28 };

// const arr = [vasya, petya, masha];

// const sortByAge = (array) => {
//   const sortedArray = array.sort((a, b) => a.age - b.age);
//   return sortedArray;
// };

// console.log(sortByAge(arr));

// function shuffle(arr) {
//   const shuffleArr = arr;
//   let j;
//   let temp;
//   for (let i = shuffleArr.length - 1; i > 0; i -= 1) {
//     j = Math.floor(Math.random() * (i + 1));
//     temp = shuffleArr[j];
//     shuffleArr[j] = shuffleArr[i];
//     shuffleArr[i] = temp;
//   }
//   return arr;
// }

// const array = [1, 2, 3];
// console.log(shuffle(array));

// const vasya = { name: "Вася", age: 25 };
// const petya = { name: "Петя", age: 30 };
// const masha = { name: "Маша", age: 29 };

// const array = [vasya, petya, masha];

// const getAverageAge = (arr) => {
//   const result = arr.reduce((sum, current, index) => {
//     if (index === arr.length - 1) {
//       return (sum + current.age) / arr.length;
//     }
//     return sum + current.age;
//   }, 0);
//   return result;
// };

// console.log(getAverageAge(array));

const strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

const unique = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    const isElement = arr.includes(arr[i], i + 1);
    if (!isElement) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(unique(strings));
