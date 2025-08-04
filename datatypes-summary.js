// Primitive data types
// 7 types :  String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;  //undefined
const id = Symbol('123')
const anotherId = Symbol('123')
const bigNumber = 23298299227233232n //bigInt

// Reference/Non-Primitve data types
// 3 types: Array, Objects, Functions

const heros = [ "ironman", "thor", "hulk"]  //array

let myObj = {                //object
    name: "aditya",
    age: 20,
}

const myFunction = function(){        //function
    console.log("hello world");
}

console.log(typeof BigNumber);

// JavaScript is a dynamically typed language.
// What does that mean?
// Dynamic typing means that you don’t need to declare the type of a variable when you create it.
// The type is determined at runtime, and a variable’s type can change as your program runs.

let x = 10;      // x is a number
x = "hello";     // now x is a string


/*
type of val => Result

undefined  =>  "undefined"
null  =>  "object"
boolean  => "boolean"
number  =>  "number"
string  => "string"
*/