// Task 1

// const sum = (num1 = 0) => {
//   return function (num2) {
//     return num1 + num2;
//   };
// };
// console.log(sum(5)(-1));

// Task 2

// const inBetween = (a, b) => {
//   return (elem) => elem >= a && elem <= b;
// };

// const inArray = (array) => {
//   return (elem) => array.includes(elem);
// };

// const arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(arr.filter(inBetween(3, 6)));

// console.log(arr.filter(inArray([1, 2, 10])));

// Task 3

// const users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" },
// ];

// const byField = (field) => {
//   return (a, b) => (a[field] > b[field] ? 1 : -1);
// };

// console.log(users.sort(byField("name")));
// console.log(users.sort(byField("age")));

// Task 4

function makeArmy() {
  const shooters = [];

  let i = 0;
  while (i < 10) {
    const j = i;
    const shooter = () => {
      return j;
    };
    shooters.push(shooter);
    i += 1;
  }

  return shooters;
}

const army = makeArmy();

console.log(army[0]());
console.log(army[5]());
