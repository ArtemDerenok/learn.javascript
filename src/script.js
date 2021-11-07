// Task 1

// const user = {
//   name: "Василий Иванович",
//   age: 35,
// };

// const user2 = JSON.parse(JSON.stringify(user));
// console.log(user2);

// Task 2

const room = {
  number: 23,
};

const meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    if (key !== "" && value === meetup) {
      return undefined;
    }
    return value;
  })
);
