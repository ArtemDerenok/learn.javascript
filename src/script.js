const showNotification = ({ top = 0, right = 0, html, className}) => {
  const div = document.createElement("div");
  div.classList.add("notification");
  if (className) {
    div.classList.add(className);
  }
  div.style.top = `${top}px`;
  div.style.right = `${right}px`;
  div.textContent = html;
  document.body.append(div);
};
showNotification({
  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
  right: 10, // 10px от правого края окна (по умолчанию 0px)
  html: "Hello!", // HTML-уведомление
  className: "welcome",
});

setTimeout(() => {
  document.querySelector("div").style.display = "none";
}, 1500);
