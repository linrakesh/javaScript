"use strict";
const buttons = document.querySelectorAll(".button");
const clear = document.querySelector(".clear");
const clearOneDigit = document.querySelector(".clear-one-digit");
const textBox = document.querySelector("#result");

let a = "";
let b = "";
let operator = "";

const calculateResult = function () {
  let result;
  if (operator === "+") result = a + b;
  if (operator === "-") result = a - b;
  if (operator === "*") result = a * b;
  if (operator === "/") result = a / b;
  textBox.value = result;
  a = result;
  b = "";
  operator = "";
};

for (const button of buttons) {
  button.addEventListener("click", function () {
    switch (button.textContent) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        textBox.value = textBox.value + "" + button.textContent;
        operator ? (b = Number(textBox.value)) : (a = Number(textBox.value));
        break;
      case ".":
        if (!textBox.value.includes(".")) {
          textBox.value = textBox.value + "" + button.textContent;
          operator ? (b = Number(textBox.value)) : (a = Number(textBox.value));
        }
        break;
      case "+":
        operator = "+";
        textBox.value = "";
        break;

      case "-":
        operator = "-";
        textBox.value = "";
        break;

      case "*":
        operator = "*";
        textBox.value = "";
        break;

      case "/":
        operator = "/";
        textBox.value = "";
        break;

      case "=":
        calculateResult();
    }
  });
}

clear.addEventListener("click", function () {
  textBox.value = "";
  operator = "";
  a = "";
  b = "";
});

clearOneDigit.addEventListener("click", function () {
  let newStr = textBox.value;
  //newStr = newStr.slice(0, newStr.length - 1);
  //textBox.value = newStr;
  textBox.value = newStr.slice(0, newStr.length - 1);
  operator ? (b = Number(newStr)) : (a = Number(newStr));
});

document.body.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      textBox.value = textBox.value + "" + e.key;
      operator ? (b = Number(textBox.value)) : (a = Number(textBox.value));
      break;
    case ".":
      if (!textBox.value.includes(".")) {
        textBox.value = textBox.value + "" + e.key;
        operator ? (b = Number(textBox.value)) : (a = Number(textBox.value));
      }
      break;
    case "+":
      operator = "+";
      textBox.value = "";
      break;

    case "-":
      operator = "-";
      textBox.value = "";
      break;

    case "*":
      operator = "*";
      textBox.value = "";
      break;

    case "/":
      operator = "/";
      textBox.value = "";
      break;

    case "=":
      calculateResult();
  }
});
