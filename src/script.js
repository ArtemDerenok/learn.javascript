// Task 1;

// const head = {
//   glasses: 1,
// };

// const table = {
//   pen: 3,
//   __proto__: head,
// };

// const bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,
// };

// const pockets = {
//   money: 2000,
//   __proto__: bed,
// };

// Task 2

const hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

const speedy = {
  stomach: [],
  __proto__: hamster,
};

const lazy = {
  stomach: [],
  __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log(speedy);
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple
