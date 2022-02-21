function preloadImages(sources, callback) {
  let cnt = 0;
  sources.forEach((elem) => {
    const img = document.createElement("img");
    img.src = elem;
    img.addEventListener("load", () => {
      cnt += 1;
      if (cnt === sources.length) {
        callback();
      }
    });

    img.addEventListener("error", () => alert("Ошибка загрузки изображения"));
  });
}

// ---------- тест ----------

const sources = [
  "https://en.js.cx/images-load/1.jpg",
  "https://en.js.cx/images-load/2.jpg",
  "https://en.js.cx/images-load/3.jpg",
];

// добавляем случайные символы к ссылкам, чтобы избежать кеширования
for (let i = 0; i < sources.length; i += 1) {
  sources[i] += `?${Math.random()}`;
}

// для каждого изображения
// создадим другое изображение с аналогичным src и проверим, есть ли у нас его ширина
function testLoaded() {
  let widthSum = 0;
  for (let i = 0; i < sources.length; i += 1) {
    const img = document.createElement("img");
    img.src = sources[i];
    widthSum += img.width;
  }
  alert(widthSum);
}

// каждое изображение в разрешении 100x100, итоговая сумма их ширин должна быть 300
preloadImages(sources, testLoaded);
