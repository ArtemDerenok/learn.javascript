// Task 1

// async function loadJson(url) {
//   let response = await fetch(url);
//   if (response.status === 200) {
//     let result = await response.json();
//     return result;
//   }
//   throw new Error("Ошибка");
// }

// loadJson("no-such-user.json")
//   .catch(alert);

// Task 2

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = "HttpError";
//     this.response = response;
//   }
// }

// async function loadJson(url) {
//   let response = await fetch(url);
//   if (response.status === 200) {
//     let result = await response.json();
//     return result;
//   } else {
//     throw new HttpError(response);
//   }
// }

// // Запрашивать логин, пока github не вернёт существующего пользователя.
// async function demoGithubUser() {
//   let response;
//   while(true) {
//     const name = prompt("Введите логин?", "iliakan");
//     try{
//       response = await loadJson(`https://api.github.com/users/${name}`);
//       break;
//     } catch(error) {
//       if (error instanceof HttpError && error.response.status === 404) {
//         alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//       } else {
//         throw error;
//       }
//     }
//   }
//   alert(`Полное имя: ${response.name}`);
//   return response;
// }

// demoGithubUser();

// Task 3

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 3000));

  return 10;
}

function f() {
  wait().then(value => console.log(value));
}
f();
