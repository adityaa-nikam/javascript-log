const name = "aditya"
const repoCount = 50

// console.log(name + repoCount + " Value");  // older way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);n  //modern way

const gameName = new String('aditya-07-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)    // cannot pass negative values
console.log(newString);

const anotherString = gameName.slice(-8, 4)   // can pass negative values
console.log(anotherString);

const newStringOne = "   aditya    "
console.log(newStringOne);
console.log(newStringOne.trim());    //removes starting and end spaces

const url = "https://aditya.com/aditya%20nikam"

console.log(url.replace('%20', '-'))   // output => https://aditya.com/aditya-nikam

console.log(url.includes('aditya'))    // true    (url includes aditya)

console.log(url.includes('manish'))  // false

console.log(gameName.split('-'));       // [ 'aditya', '07' , 'com']


// learn string methods from mdn and console prototype