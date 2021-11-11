// Task 1

// const printNumbers = (from, to) => {
//   let a = from;

//   const timerId = setInterval(() => {
//     if (a <= to) {
//       console.log(a);
//       a += 1;
//     } else {
//       clearInterval(timerId);
//     }
//   }, 1000);
// };

// printNumbers(1, 5);
// Task 2

let timerId = setTimeout(
  function printNumbers(from, to) {
    let a = from;
    const b = to;
    if (a <= b) {
      console.log(from);
      a += 1;
      timerId = setTimeout(printNumbers, 1000, a, b);
    } else {
      clearTimeout(timerId);
    }
  },
  1000,
  1,
  5
);
