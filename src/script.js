/* eslint-disable no-unused-expressions */
// function makeCounter() {
//   function counter() {
//     return counter.count++;
//   }

//   counter.count = 0;
//   counter.set = (value) => {
//     counter.count = value;
//   };
//   counter.decrease = () => counter.count--;
//   return counter;
// }

// const counter = makeCounter();

// alert(counter()); // 0
// alert(counter()); // 1

// counter.set(10); // установить новое значение счётчика

// alert(counter()); // 10

// counter.decrease(); // уменьшить значение счётчика на 1

// alert(counter()); // 10 (вместо 11)
function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = () => currentSum;

  return f;
}

console.log(`${sum(1)(2)(3)}`); // 3
