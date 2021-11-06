// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// const sumSalaries = (salary) => {
//   let sum = 0;
//   // eslint-disable-next-line no-restricted-syntax
//   for (const value of Object.values(salary)) {
//     sum += value;
//   }
//   return sum;
// };

// console.log(sumSalaries(salaries));

// Task 2

const user = {
  name: "John",
  age: 30,
};

const count = (obj) => {
  return Object.values(obj).length;
};

console.log(count(user));
