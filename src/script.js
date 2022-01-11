// Task1

// let user = {
//   name: "John",
// };

// function wrap(target1) {
//   return new Proxy(target1, {
//     get(target2, prop, receiver) {
//       if (prop in target2) {
//         return Reflect.get(target2, prop, receiver);
//       }
//       throw new Error("Ошибка: такого свойства не существует");
//     },
//   });
// }

// user = wrap(user);

// alert(user.name);
// alert(user.age);

// Task 2

// let array = [1, 2, 3];

// array = new Proxy(array, {
//   get(target, prop, receiver) {
//     if (+prop < 0) {
//       const value = target[target.length - Math.abs(prop)];

//       if (value) {
//         return Reflect.get(target, target.length - Math.abs(prop), receiver);
//       }
//       throw new Error("Ошибка: такой элемент не существует");
//     } else if (target[prop]) {
//       return Reflect.get(target, prop, receiver);
//     } else {
//       throw new Error("Ошибка: такой элемент не существует");
//     }
//   },
// });

// console.log(array[0]);

// Task 3
const handlers = Symbol("handlers");

function makeObservable(target) {
  target[handlers] = [];

  target.observe = function (handler) {
    target[handlers].push(handler);
  };
  return new Proxy(target, {
    set(target, prop, value, receiver) {
      const result = Reflect.set(target, prop, value, receiver);
      if (result) {
        target[handlers].forEach((handler) => handler(prop, value));
      }
      return result;
    },
  });
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user.name = "John";
console.log(user);
