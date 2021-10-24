let nameJavaScript = prompt('Какое официальное название JavaScript');

if (nameJavaScript === 'ECMAScript') {
  alert('Верно');
} else {
  alert('Не верно. ECMAScript');
}

let number = +prompt('Введите число');

if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}

let result;
let a = +prompt('Число А');
let b = +prompt('Число B');

(a + b < 4) ? result = 'Мало': result = 'Много';
alert(result);


let login = prompt('Введите логин');
let message = (login === 'Сотрудник') ? 'Привет' :
  (login === 'Директор') ? 'Здравствуйте' :
  (login === '') ? 'Нет логина' :
  '';
