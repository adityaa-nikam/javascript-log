// Dates

let myDate = new Date()

console.log(myDate.toString()); // Mon Aug 04 2025 19:39:30 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());   // Mon Aug 04 2025
console.log(myDate.toLocaleString());   //  8/4/2025, 7:42:46 PM
console.log(myDate.toLocaleDateString());   // 8/4/2025
console.log(myDate.toISOString()); // 2025-08-04T19:42:46.319Z
console.log(myDate.toJSON());   //   2025-08-04T19:42:46.319Z

console.log(typeof myDate);  // OBJECT

// console.log(myDate.getFullYear());  // 2025
// console.log(myDate.getMonth());     // 7 (August; months are 0-indexed)
// console.log(myDate.getMonth() + 1);     // no confusion
// console.log(myDate.getDate());      // 4 (day of the month)
// console.log(myDate.getHours());     // 13 (1 PM)


let myCreatedDate = new Date(2025, 0 , 1)   // 0 => jan index
console.log(myCreatedDate.toDateString());   //Wed Jan 01 2025

let myCreatedDate2 = new Date(2025, 1, 1, 5, 3)   // 1 => feb index
console.log(myCreatedDate2.toLocaleString());   // 2/1/2025, 5:03:00 AM

let myCreatedDate3 = new Date("2025-01-12")   // in string jan => 1
console.log(myCreatedDate3.toLocaleString());   //1/12/2025, 12:00:00 AM


let myCreatedDate4 = new Date("06-06-2005")   // IN IND
console.log(myCreatedDate4.toLocaleString());   // 6/6/2005, 12:00:00 AM


let myTimeStamp = Date.now()
console.log(myTimeStamp);   // gives current time in ms
console.log( myCreatedDate4.getTime());

console.log(Date.now());  //  1754337489377
console.log(Date.now() /1000);   // 1754337517.645
console.log(Math.floor(Date.now() /1000)); // 1754337575


newDate.toLocaleString ('default', {
    weekday: "long",
})