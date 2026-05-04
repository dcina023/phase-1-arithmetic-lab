let num1 = 31;
let num2 = 2;
let multiply = num1 * num2;

let counter = 0;

let maxForRandom = 10;
let random = Math.floor(Math.random() * maxForRandom) + 1;

const num3 = 14;
const num4 = 10;
const mod = num3 % num4;

function checkRemainder() {
  if (mod === 4) {
    console.log("Yes, the remainder is 4");
  } else {
    console.log("No, the remainder is not 4");
  }
}

checkRemainder();

let max = 20;
console.log(Math.max(5,10,15,20));