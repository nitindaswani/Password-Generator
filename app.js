let password = document.querySelector("#password");
let generate = document.querySelector("#generate");
let total_char, uppercase, lowercase, numbers, specialchar, pass;
let myform = document.querySelector("#form");
let result_div = document.querySelector(".result");
let copy = document.querySelector("#copy");

myform.addEventListener("submit", (e) => {
  e.preventDefault();
  total_char = parseInt(document.querySelector("#char").value);
  uppercase = document.querySelector("#uc").checked;
  lowercase = document.querySelector("#lc").checked;
  numbers = document.querySelector("#num").checked;
  specialchar = document.querySelector("#sc").checked;
  result_div.style.display = "grid";
  generatepassword();
});

copy.addEventListener("click", (e) => {
  navigator.clipboard.writeText(pass);
  showPopup();
});

let characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  specialchar: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
};

function generatepassword() {
  password.innerText = "";
  pass = "";
  let values = "";
  if (uppercase) {
    values = values + characters.uppercase;
  }
  if (lowercase) {
    values = values + characters.lowercase;
  }
  if (numbers) {
    values = values + characters.numbers;
  }
  if (specialchar) {
    values = values + characters.specialchar;
  }

  for (let i = 0; i < total_char; i++) {
    pass = pass + values.charAt(Math.floor(Math.random() * values.length));
  }
  password.innerText = pass;
}

function showPopup() {
  let popup = document.querySelector("#popup");
  popup.classList.add("show");
  setTimeout(() => popup.classList.remove("show"), 2000);
}
