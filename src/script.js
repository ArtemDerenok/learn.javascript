// const styles = ["Джаз", "Блюз"];

// styles.push("Рок");
// console.log(styles);
// styles[Math.floor((styles.length - 1) / 2)] = "Классика";
// console.log(styles);
// console.log(styles.shift());
// console.log(styles);
// styles.unshift("Рэп", "Регги");
// console.log(styles);

// const arr = [];

// const setSumValue = () => {
//   return prompt("Введите число");
// };

// const calcSumElemArray = () => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     sum += arr[i];
//   }
//   return sum;
// };

// const sumInput = () => {
//   while (true) {
//     const elemArray = setSumValue();
//     if (isFinite(elemArray) && elemArray !== "" && elemArray !== null) {
//       arr.push(+elemArray);
//     } else {
//       console.log(calcSumElemArray());
//       break;
//     }
//   }
// };

// sumInput();
// console.log(arr);

const getMaxSubSum = (arr) => {
  let maxSum = 0;
  let maxSubSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    maxSubSum += arr[i];
    maxSum = Math.max(maxSum, maxSubSum);
    if (maxSubSum < 0) {
      maxSubSum = 0;
    }
  }
  return maxSum;
};

console.log(getMaxSubSum([2, -1, 2, 3, -9]));
