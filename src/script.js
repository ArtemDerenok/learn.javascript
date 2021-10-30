const calculator = {
  read() {
    this.numberOne = +prompt("Введите первое число");
    this.numberTwo = +prompt("Введите второе число");
  },
  sum() {
    return this.numberOne + this.numberTwo;
  },
  mul() {
    return this.numberOne * this.numberTwo;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

const ladder = {
  step: 0,
  up() {
    this.step += 1;
    return this;
  },
  down() {
    this.step -= 1;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().showStep();
