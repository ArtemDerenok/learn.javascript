// Task 1

const dictionary = Object.create(null);

// ваш код, который добавляет метод dictionary.toString

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ
dictionary.toString = function () {
  return Object.keys(this).join();
};

Object.defineProperty(dictionary, "toString", {
  enumerable: false,
});
// только apple и __proto__ выведены в цикле
for (const key in dictionary) {
  console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"
