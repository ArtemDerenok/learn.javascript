// Task 1

// const user = {
//   name: "John",
//   years: 30,
// };

// const { name, years: age, isAdmin = false } = user;
// console.log(name);
// console.log(age);
// console.log(isAdmin);

// Task 2

const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const topSalary = (obj) => {
  const result = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  const [name, ,] = result[0];
  return name;
};

console.log(topSalary(salaries));
