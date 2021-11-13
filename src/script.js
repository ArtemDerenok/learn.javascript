// Task 1

// function work(a, b) {
//   console.log(a + b); // произвольная функция или метод
// }

// const spy = (func) => {
//   function wrapper(...args) {
//     wrapper.calls.push(args);
//     return func.apply(this, arguments);
//   }

//   wrapper.calls = [];
//   return wrapper;
// };

// work = spy(work);
// work(1, 2); // 3
// work(4, 5); // 9

// for (const args of work.calls) {
//   console.log(`call:${args.join()}`); // "call:1,2", "call:4,5"
// }

// Task 2

// function f(x) {
//   console.log(x);
// }

// const delay = (func, ms) => {
//   return (x) => {
//     setTimeout(() => {
//       func.call(this, x);
//     }, ms);
//   };
// };

// // создаём обёртки
// const f1000 = delay(f, 1000);
// const f1500 = delay(f, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс

// Task 3

// const debounce = (func, ms) => {
//   let isCooldown = false;
//   return function (x) {
//     if (isCooldown) {
//       return;
//     }
//     func.apply(this, arguments);
//     isCooldown = true;
//     setTimeout(() => (isCooldown = false), ms);
//   };
// };

// const f = debounce(alert, 1000);

// f(1); // выполняется немедленно
// f(2); // проигнорирован

// setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout(() => f(4), 1100); // выполняется
// setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

// Task 4

function f(a) {
  console.log(a);
}

function throttle(func, ms) {
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
const f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)
