// array
// enables storing a collection of multiple items under a single variable name
// javascript arrays can be resizable an cn contain diff data types
// javascript array-copy operations create shallow copies
// shallow copies => copy whose prop share the same reference point
// deep copies => copy whose prop doesnot share the same reference point

const myArr = [0, 1, 2, 3, 4, 5 ]   // similiar elements 
console.log(myArr[0]); // accessing value in array
// const myArr = [0, 1, 2, 3, 4, 5 , true, "aditya"] // multiple elements 

// const myArr2 = new Array(1,2,3,4) // another way of declaring array

console.log(myArr[0]); // accessing value in array

// ARRAY METHODS

myArr.push(6)   // adds value 
myArr.push(7)
myArr.pop()   // deletes the last value
console.log(myArr)

myArr.unshift(9)   // adds 9 start of array
myArr.shift()   // removes 9 
console.log(myArr) 

console.log(myArr.includes(9));  // false  (is 9 present)
console.log(myArr.indexOf(3)); // 3rd index

const newArr = myArr.join() 
console.log(myArr);     // [0,1,2,3,4,5]
console.log(newArr);    // 0,1,2,3,4,5   
console.log(typeof newArr);    // string

// slice , splice

console.log("A", myArr);     // A [0,1,2,3,4,5]
const myn1 = myArr.slice(1,3)      //STARTS FROM 1 AND ENDS EXCLUDING 3

console.log(myn1);          // [ 1, 2]
console.log("B ", myArr);   //  B [0,1,2,3,4,5] SLICE does not manipulate the original array

const myn2 = myArr.splice(1,3)  
console.log(myn2);        // [ 1, 2, 3 ]
console.log("c ", myArr); // [ 0 ,4, 5] SPLICE manipulates the original array

//__________________



