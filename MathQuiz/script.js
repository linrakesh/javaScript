"use strict";
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const result = document.querySelector("#result");
const ans1 = document.querySelector(".ans1");
const ans2 = document.querySelector(".ans2");
const ans3 = document.querySelector(".ans3");
const ans4 = document.querySelector(".ans4");

const grade = document.querySelector("#grade");
const operator = document.querySelector("#operator");
const operatorResult = document.querySelector("#operator--result");

let a, b, c;
let newGrade = 10;
let operation = "+";

const Newresult = function () {
  let result;
  a = Math.trunc(Math.random() * newGrade + 1);
  b = Math.trunc(Math.random() * newGrade + 1);
  if (operation === "+") result = a + b;
  if (operation === "-") result = a - b;
  if (operation === "*") result = a * b;
  if (operation === "/") result = a / b;
  return result;
};

const assignResult = function () {
  const position = Math.trunc(Math.random() * 4 + 1);
  //console.log(position);
  const button = `ans${position}`;
  if (button === "ans1") ans1.textContent = c;
  else ans1.textContent = Newresult();
  if (button === "ans2") ans2.textContent = c;
  else ans2.textContent = Newresult();
  if (button === "ans3") ans3.textContent = c;
  else ans3.textContent = Newresult();
  if (button === "ans4") ans4.textContent = c;
  else ans4.textContent = Newresult();
};

const startGame = function () {
  a = Math.trunc(Math.random() * newGrade + 1);
  b = Math.trunc(Math.random() * newGrade + 1);

  if (operation === "+") c = a + b;
  if (operation === "-") c = a - b;
  if (operation === "*") c = a * b;
  if (operation === "/") c = a / b;

  first.textContent = `${a}`;
  second.textContent = `${b}`;
  operatorResult.textContent = operation;
  result.textContent = "?";
  assignResult();
};

startGame();

ans1.addEventListener("click", function () {
  const answer = Number(ans1.textContent);
  if (answer === c) alert("Correct answer");
  else alert("wrong answer");
  startGame();
});
ans2.addEventListener("click", function () {
  const answer = Number(ans2.textContent);
  if (answer === c) alert("Correct answer");
  else alert("wrong answer");
  startGame();
});
ans3.addEventListener("click", function () {
  const answer = Number(ans3.textContent);
  if (answer === c) alert("Correct answer");
  else alert("wrong answer");
  startGame();
});
ans4.addEventListener("click", function () {
  const answer = Number(ans4.textContent);
  if (answer === c) alert("Correct answer");
  else alert("wrong answer");
  startGame();
});

function newGradeValue() {
  newGrade = Number(grade.value);
  /* console.log("lavel :", lavel); */
  startGame();
}

function operationSelect() {
  operation = operator.value;
  console.log(typeof operation);
  operatorResult.textContent = operation;
  startGame();
}
