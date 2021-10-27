// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешали?');
}

function min(a, b) {
  return Math.min(a, b);
}

function pow(x, n) {
  if (isInteger(x) && isInteger(n)) {
    return x ** n;
  }
}

function isInteger(number) {
  if (number % 1 === 0) {
    return true;
  }  
  return false;
}
