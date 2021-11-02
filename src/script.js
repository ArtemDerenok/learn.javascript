// const camelize = (str) => {
//   const arr = str.split("-");
//   const result = arr.map((elem, index) => {
//     let elemCopy = elem;
//     if (index) {
//       elemCopy = elemCopy[0].toUpperCase() + elemCopy.slice(1);
//     }
//     return elemCopy;
//   });
//   return result.join("");
// };

// console.log(camelize("background-color"));

// const filterRange = (arr, a, b) => {
//   const result = arr.filter((elem) => elem >= a && elem <= b);
//   return result;
// };

// const arr = [5, 3, 8, 1];

// const filtered = filterRange(arr, 1, 4);

// console.log(filtered);
// console.log(arr);

const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i -= 1;
    }
  }
};

const arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

console.log(arr);
