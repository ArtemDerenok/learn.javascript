const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

const schedule = {};

const isEmpty = (obj) => {
  if (Object.keys(obj).length) {
    return true;
  }
  return false;
};

console.log(isEmpty(schedule));

let sumSalary = 0;

const calcSumSalary = (obj) => {
  if (isEmpty(obj)) {
    Object.values(obj).forEach((elem) => {
      sumSalary += elem;
    });
    return sumSalary;
  }
  return false;
};

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

console.log(calcSumSalary(salaries));

const menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

const multiplyNumeric = (obj) => {
  Object.keys(obj).forEach((elem) => {
    if (typeof menu[elem] === "number") {
      menu[elem] *= 2;
    }
  });
};
multiplyNumeric(menu);
console.log(menu);
