"use strict";

let boxes = document.querySelectorAll(".box");
const newGame = document.getElementById("new--game");

let player = true;
let symbol = "0";
const win = function (symbol) {
  const cond1 =
    boxes[0].textContent === symbol &&
    boxes[1].textContent === symbol &&
    boxes[2].textContent === symbol;
  const cond2 =
    boxes[3].textContent === symbol &&
    boxes[4].textContent === symbol &&
    boxes[5].textContent === symbol;
  const cond3 =
    boxes[6].textContent === symbol &&
    boxes[7].textContent === symbol &&
    boxes[8].textContent === symbol;
  const cond4 =
    boxes[0].textContent === symbol &&
    boxes[3].textContent === symbol &&
    boxes[6].textContent === symbol;
  const cond5 =
    boxes[1].textContent === symbol &&
    boxes[4].textContent === symbol &&
    boxes[7].textContent === symbol;
  const cond6 =
    boxes[2].textContent === symbol &&
    boxes[5].textContent === symbol &&
    boxes[8].textContent === symbol;
  const cond7 =
    boxes[0].textContent === symbol &&
    boxes[4].textContent === symbol &&
    boxes[8].textContent === symbol;
  const cond8 =
    boxes[4].textContent === symbol &&
    boxes[2].textContent === symbol &&
    boxes[6].textContent === symbol;
  if (cond1 || cond2 || cond3 || cond4 || cond5 || cond6 || cond7 || cond8) {
    setTimeout(() => {
      alert("You won");
      clear();
    }, 500);
  }
};

for (const box of boxes) {
  box.addEventListener("mousedown", function () {
    symbol = player ? "0" : "X";
    box.textContent = symbol;
    win(symbol);
    player = player ? false : true;
  });
}

const clear = function () {
  for (const box of boxes) {
    box.textContent = "";
  }
};

newGame.addEventListener("click", clear);
