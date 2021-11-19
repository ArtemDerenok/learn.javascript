class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

const rabbit = new Rabbit("Кроль");

alert(rabbit.hasOwnProperty("name")); // Ошибка
