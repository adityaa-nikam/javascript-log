const score = 400
console.log(score);                 //400

const balance = new Number(100)
console.log(balance);                // [Number:100]

console.log(balance.toString().length);  // 3

console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.8956
console.log(otherNumber.toPrecision(3));  //124

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 ADDS COMMAS IN INDIAN STNDARD

//+++++++++++ MATHS +++++++++++

console.log(Math); //object (functions in console )
console.log(Math.abs(-4));  // turns -ve value to +ve
console.log(Math.round(4.3));  // rounds off to 4
console.log(Math.round(4.6));  // rounds off to 5

console.log(Math.ceil(4.2));  // rounds off to 5 only highest value
console.log(Math.floor(4.7));  // rounds off to 4 only lowest value

console.log(Math.sqrt(25));  // 5

console.log(Math.min(4,3,6,8));  // gives min value
console.log(Math.max(4,3,6,8));  // gives max value

console.log(Math.random());  //gives random value from 0 to 1
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)