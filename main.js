const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordtwo = document.getElementById("passwordtwo");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passowordValue = password.value;
  const passwordtwonameValue = passwordtwo.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório");
  } else {
    setSuccessFor(username);
  }
  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else {
    setSuccessFor(email);
  }
  if (passowordValue === "") {
    setErrorFor(password, "O campo de senha é obrigatório");
  } else if (passowordValue.length < 8) {
    setErrorFor(password, "Obrigatório possuir acima de 8 caractéres");
  } else {
    setSuccessFor(password);
  }
  if (passwordtwonameValue === "") {
    setErrorFor(passwordtwo, "É obrigatório a confirmação de senha");
  } else if (passwordtwonameValue !== passowordValue) {
    setErrorFor(passwordtwo, "As senhas são diferentes");
  } else {
    setSuccessFor(passwordtwo);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  //add msgde erro
  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  //adicionar a classe de sucesso
  formControl.className = "form-control success";
}
