// Task 1

// const sumTo = (n) => {
//   let sum = 0;
//   for (let i = n; i > 0; i -= 1) {
//     sum += i;
//   }
//   return sum;
// };

// console.log(sumTo(100));

// const sumTo = (n) => {
//   let sum = n;
//   if (n === 1) {
//     return sum;
//   }
//   sum += sumTo(n - 1);
//   return sum;
// };

// console.log(sumTo(3));

// const sumTo = (n) => {
//   return ((1 + n) * n) / 2;
// };

// console.log(sumTo(3));

// Task 2

// const factorial = (n) => {
//   let a = n;
//   if (n === 1) {
//     return a;
//   }
//   a *= factorial(n - 1);
//   return a;
// };

// console.log(factorial(5));

// Task 3

// const fib = (n) => {
//   let cnt = 2;
//   let num1 = 1;
//   let num2 = 1;
//   let result = 0;
//   for (let i = 0; i < n; i += 1) {
//     result = num1 + num2;
//     cnt += 1;
//     num1 = num2;
//     num2 = result;
//     if (cnt === n) {
//       break;
//     }
//   }
//   return result;
// };

// console.log(fib(7));

// const fib = (n) => {
//   if (n <= 2 && n) {
//     return 1;
//   }
//   if (n === 0) {
//     return 0;
//   }
//   return fib(n - 2) + fib(n - 1);
// };

// console.log(fib(0));

// Task 4

// const list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// const printList = (list1) => {
//   let tmp = list1;
//   while (tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }
// };

// console.log(printList(list));

// const printList = (list1) => {
//   console.log(list1.value);
//   if (list1.next) {
//     printList(list1.next);
//   }
// };

// printList(list);

// Task 5

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// const printList = (list1) => {
//   let tmp = list1;
//   const result = [];
//   while (tmp) {
//     result.push(tmp.value);
//     tmp = tmp.next;
//   }
//   for (let i = result.length - 1; i >= 0; i -= 1) {
//     console.log(result[i]);
//   }
// };

// printList(list);

const printList = (list1) => {
  if (list1.next) {
    printList(list1.next);
  }
  console.log(list1.value);
};

printList(list);
