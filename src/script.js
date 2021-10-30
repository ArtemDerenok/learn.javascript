function Calculator() {
  this.read = function () {
    this.a = +prompt("Введите первое число");
    this.b = +prompt("Введите второе число");
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

const calculator = new Calculator();
calculator.read();

console.log(calculator.sum());
console.log(calculator.mul());

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("Введите число");
  };
}

const accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

console.log(accumulator.value);
