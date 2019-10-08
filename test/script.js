function login() {
  let company = prompt("Enter your company name?");
  alert("Your company name is " + company);
  document.querySelector(".title").textContent = company;
}

document.querySelector(".btn-login").addEventListener("click", login);
