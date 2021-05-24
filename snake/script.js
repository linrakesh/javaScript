"use strict";
const canvas = document.getElementById("snakegame");
const ctx = canvas.getContext("2d");

let speed = 7;

function drawGame() {
  console.log("draw game");
  setTimeout(drawGame, 1000 / speed);
}
