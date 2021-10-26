// for (let i = 2; i < 11; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let i = 0;

// while (i < 3) {
//   alert(`number ${i}`);
//   i++;
// }

// let i;
// do {
//   i = prompt('Введите число', '');
// } while (i < 100 && i);

let n = +prompt('Введите число');

label: for (let i = 2; i < n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue label;
  }
  console.log(i);
}
