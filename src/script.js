// const ucFirst = (str) => {
//   if (!str) {
//     return str;
//   }
//   return str[0].toUpperCase() + str.slice(1);
// };

// console.log(ucFirst("test"));

// const checkSpam = (str) => {
//   if (
//     str.toLowerCase().includes("viagra") ||
//     str.toLowerCase().includes("xxx")
//   ) {
//     console.log(str);
//     return true;
//   }
//   return false;
// };

// console.log(checkSpam("ViagrA"));

// const truncate = (str, maxlength) => {
//   if (str.length > maxlength) {
//     return `${str.slice(0, maxlength - 1)}...`;
//   }
//   return str;
// };

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

const extractCurrencyValue = (str) => {
  let num = "";
  // eslint-disable-next-line no-restricted-syntax
  for (const char of str) {
    if ((+char && char !== " ") || char === "0") {
      num += char;
    }
  }
  return +num;
};

console.log(extractCurrencyValue("$120"));
