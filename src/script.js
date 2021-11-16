// // Task 1
// function f() {
//   alert("Hello!");
// }

// Function.prototype.defer = function (ms) {
//   setTimeout(this, ms);
// };
// f.defer(1000);

// Task 2
function f(a, b) {
  alert(a + b);
}

Function.prototype.defer = function (ms) {
  return (c, d) => {
    setTimeout(() => this(c, d), ms);
  }
};

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
