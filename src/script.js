const showFormBtn = document.getElementById("show-form-btn");
const formContainer = document.getElementById("prompt-form-container");
const form = document.getElementById("prompt-form");
const formMessage = document.getElementById("prompt-message");

const showForm = (message, callback) => {
  formMessage.innerHTML = message;
  formContainer.style.display = "block";
  form.addEventListener("submit", callback, { once: true });
  form.elements[2].addEventListener(
    "click",
    () => {
      console.log(null);
      formContainer.style.display = "none";
    },
    { once: true }
  );
};

showFormBtn.addEventListener("click", () => {
  showForm("Введите что-нибудь<br>...умное :)", function (event) {
    event.preventDefault();
    console.log(form.elements[0].value);
    formContainer.style.display = "none";
  });
});
