// IMPORTS
import { hello } from "./codeA.js";
import { hello as helloB } from "./codeB.js";
const MIN_NUMBER = -10;
const MAX_NUMBER = 10;
const STEP_AMOUNT = 1;
// ELEMENTS
const number = document.querySelector("[data-key = number]");
const minus = document.querySelector("[data-key = minus]");
const plus = document.querySelector("[data-key = plus]");

// FUNCTIONS

const subtractHandler = () => {
  console.log("subract was clicked");
  number.value = parseInt(number.value) - STEP_AMOUNT;

  if (plus.disabled === true) {
    plus.disabled = false;
  }

  if (number.value <= MIN_NUMBER) {
    minus.disabled = true;
  }
};

const addHandler = () => {
  console.log("Add was clicked");
  number.value = parseInt(number.value) + STEP_AMOUNT;

  if (minus.disabled === true) {
    minus.disabled = false;
  }
  if (number.value >= MAX_NUMBER) {
    plus.disabled = true;
  }
};

minus.addEventListener("click", subtractHandler);
plus.addEventListener("click", addHandler);

console.log("123", parseInt("123") + 8, 123);
console.log(hello, helloB);
