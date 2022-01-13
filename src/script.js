// Task 1

const liCollection = document.querySelectorAll("li");

for (const li of liCollection) {
  console.log(li.firstChild.data);
  console.log(li.getElementsByTagName('li').length);
}
