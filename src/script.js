// Task 1

// const d = new Date(2012, 1, 20, 3, 12);

// console.log(d);

// Task 2

// const d = new Date(2012, 0, 3);

// const getWeekDay = (date) => {
//   const weekDay = date.getDay();
//   switch (weekDay) {
//     case 0:
//       return "ВС";
//     case 1:
//       return "ПОН";
//     case 2:
//       return "ВТ";
//     case 3:
//       return "СР";
//     case 4:
//       return "ЧТ";
//     case 5:
//       return "ПТ";
//     case 6:
//       return "СБ";
//     default:
//       return "ПН";
//   }
// };

// console.log(getWeekDay(d));

// Task 3

// const d = new Date(2012, 0, 3);

// const getLocalDay = (date) => {
//   let day = date.getDay();
//   if (day === 0) {
//     day = 7;
//   }
//   return day;
// };

// console.log(getLocalDay(d));

// Task 4

// const d = new Date(2015, 0, 2);

// const getDateAgo = (date, days) => {
//   const newDate = new Date(date);
//   newDate.setDate(date.getDate() - days);
//   return newDate;
// };

// console.log(getDateAgo(d, 365));

// Task 5

// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month + 1);
//   date.setDate(date.getDate() - 1);
//   return date.getDate();
// };

// console.log(getLastDayOfMonth(2012, 1));

// Task 6

// const getSecondsToday = () => {
//   const currentDate = new Date();
//   const startDay = new Date(
//     currentDate.getFullYear(),
//     currentDate.getMonth(),
//     currentDate.getDate()
//   );
//   console.log((currentDate - startDay) / 1000);
// };

// console.log(getSecondsToday());

// Task 7

// const getSecondsToTomorrow = () => {
//   const currentDate = new Date();
//   const tomorrowDate = new Date(
//     currentDate.getFullYear(),
//     currentDate.getMonth(),
//     currentDate.getDate() + 1
//   );
//   console.log(Math.round((tomorrowDate - currentDate) / 1000));
// };

// getSecondsToTomorrow();

// Task 8

const formatDate = (date) => {
  const currentDate = new Date();
  const dif = currentDate - date;
  const seconds = Math.round(dif / 1000);
  const minutes = Math.round(seconds / 60);
  if (seconds < 1) {
    return "Прямо сейчас";
  }
  if (seconds >= 1 && seconds < 60) {
    return `Прошло ${seconds} секунд`;
  }
  if (minutes >= 1 && minutes < 60) {
    return `Прошло ${minutes} минут`;
  }
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
};

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
