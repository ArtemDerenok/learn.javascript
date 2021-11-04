// const values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// const unique = (arr) => {
//   return Array.from(new Set(arr));
// };

// console.log(unique(values));

// const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// const aclean = (array) => {
//   const result = array.map((elem) => [
//     elem.toLowerCase().split("").sort().join(""),
//     elem,
//   ]);
//   const map = new Map(result);
//   return Array.from(map.values());
// };

// console.log(aclean(arr));

const map = new Map();

map.set("name", "John");

const keys = Array.from(map.keys());
keys.push("more");

console.log(keys);
