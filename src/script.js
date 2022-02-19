const selectGenres = document.getElementById("genres");

console.log(selectGenres.value);
console.log(selectGenres[selectGenres.selectedIndex].text);

const option = new Option("Классика", "classic", false, true);
selectGenres.append(option);
