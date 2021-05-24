"use strict";

const formSumbit = document.querySelector("#submit");
const formReset = document.querySelector("#reset");
const formName = document.getElementById("name");
const pass = document.getElementById("password");
const tel = document.getElementById("tel");
const email = document.getElementById("email");
const website = document.getElementById("website");
const file = document.getElementById("file");
const image = document.querySelector(".responsive");
//const image = document.getElementsByClassName("responsive");

let submit = true;

//working of form
formSumbit.addEventListener("click", function (e) {
  e.preventDefault();
  const sname = formName.value.trim();
  const spass = pass.value.trim();
  const sphone = tel.value.trim();
  const semail = email.value.trim();
  const swebsite = website.value.trim();

  sname || (formName.value = "Blank Name is not allowed....");
  spass || (pass.value = "Blank password not allowed ...");
  sphone || (tel.value = "Blank Phone Number not allowed ...");
  semail || (email.value = "Blank Email not allowed ...");
  swebsite || (website.value = "Blank website not allowed ...");
  console.log(image);
  image.src = "images/beach.jpg";
});
