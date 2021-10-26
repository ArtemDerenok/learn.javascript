// let age = +prompt('Введите число');

// if (age >= 14 && age <= 90) {
//   alert('Верно');
// } else {
//   alert('Не верно');
// }

// if (age < 14 && age > 90) {
//   alert('Верно');
// } else {
//   alert('Не верно');
// }

// if (!(age >= 14 && age <=90)) {
//   alert('Верно');
// } else {
//   alert('Не верно');
// }

let userLogin = prompt('Кто там?');
let userPassword;

if (userLogin === 'Админ') {
  if ((userPassword = prompt('Пароль?')) === 'Я главный') {
    alert('Здравствуйте!');
  } else if (userPassword !== 'Я главный' && userPassword !== null) {
    alert('Неверный пароль');
  } else {
    alert('Отменено');
  }
} else if (userLogin !== 'Админ' && userLogin !== null) {
  alert('Я вас не знаю');
} else {
  alert('Отменено');
}
