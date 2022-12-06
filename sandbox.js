const form = document.getElementById("form");

const firstName = document.getElementById("First-Name");
const lastName = document.getElementById("Last-Name");
const email = document.getElementById("Email");
const password = document.getElementById("Password");

const inputfirstname = document.getElementById("inputfirstname");
const inputlastname = document.getElementById("inputlastname");
const inputemail = document.getElementById("inputemail");
const inputpassword = document.getElementById("inputpassword");
const mailErrorMessage = document.getElementById("mailerrormessage");

console.log(inputfirstname);
console.log(inputlastname);

function checkInputs() {
  const firstValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstValue === "") {
    inputfirstname.classList.add("errorbug");
    inputfirstname.classList.remove("success");
  } else {
    inputfirstname.classList.remove("errorbug");
    inputfirstname.classList.add("success");
  }
  if (lastNameValue === "") {
    inputlastname.classList.add("errorbug");
    inputlastname.classList.remove("success");
  } else {
    inputlastname.classList.remove("errorbug");
    inputlastname.classList.add("success");
  }
  if (emailValue === "") {
    inputemail.classList.add("errorbug");
    inputemail.classList.remove("success");
    mailErrorMessage.innerText = "Email cannot be empty";
  } else if (!validateEmail(emailValue)) {
    inputemail.classList.add("errorbug");
    inputemail.classList.remove("success");
    mailErrorMessage.innerText = "Looks like this is not an email";
  } else {
    inputemail.classList.remove("errorbug");
    inputemail.classList.add("success");
  }
  if (passwordValue === "") {
    inputpassword.classList.add("errorbug");
    inputpassword.classList.remove("success");
  } else {
    inputpassword.classList.remove("errorbug");
    inputpassword.classList.add("success");
  }
}

function validateEmail(mail) {
  return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
    mail
  );
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
