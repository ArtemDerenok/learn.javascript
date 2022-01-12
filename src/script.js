const animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

animals.sort((a, b) => a.localeCompare(b, "ru"));

console.log(animals);
