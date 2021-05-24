"use strict";
const hours = document.querySelector("#hours");
const minute = document.querySelector("#minute");

let hr = Number(hours.textContent);
let mn = Number(minute.textContent);

console.log(hr, mn);

const timer = function () {
  if (mn >= 60) {
    hr++;
    if (hr >= 12) {
      hr = 1;
      mn = 0;
    }
  } else {
    mn++;
  }
  if (hr >= 12) {
    mn = 0;
    hr = 0;
  }

  hours.textContent = hr;
  minute.textContent = mn;
};

setInterval(() => {
  timer();
}, 1000);
/* 
timer();
console.log(hr, mn);
timer();
console.log(hr, mn); */
