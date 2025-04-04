let loginEmail = document.getElementById("loginemail");
let loginPassword = document.getElementById("loginpassword");
let loginBtn = document.getElementById("loginBtn");
let loginError = document.getElementById("loginError");
let loginId = document.getElementById("loginId");
let signup_anchor_element = document.getElementById("signup_anchor_element");
let loginpage = document.getElementById("loginpage");

let logo = document.getElementById('logo')

loginBtn.onclick = function (event) {
  event.preventDefault();

  let userName = "";

  let data = JSON.parse(localStorage.getItem("users"));
  let rr = data.findIndex(function (i) {
    if (i.email === loginEmail.value && i.password === loginPassword.value) {
      userName = i.name;
    }
  });
  if (userName != "") {
    //loginError.innerText = "Invalid Email or Password.";
    logo.textContent = userName
  } 
};

