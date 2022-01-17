// Task 1

// const divElement = document.querySelector("[data-widget-name]");

// console.log(divElement.dataset.widgetName);

// Task 2

const links = document.querySelectorAll("a[href]");

const linksArray = Array.from(links);

linksArray.forEach((elem) => {
  if (
    elem.getAttribute("href").indexOf("://") > -1 &&
    elem.getAttribute("href").indexOf("http://internal.com") === -1
  ) {
    elem.style.color = "orange";
  }
  console.log(elem.getAttribute("href").indexOf("://"));
});
