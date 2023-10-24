"use strict"; //treat all JS code as new version

// alert(3+3); // we are using nodeJS not browser

console.log(3+3); // code readability should be high

let name = "Kshitij"
let age = 18
let isLoggedIn =  true
let state = null // if we are trying to get temperature. zero cannot be a default value. so, null is relevant here

// number => -(2^53 -1) to (2^53 - 1)
// BigInt
// String => ""
// boolen => true/false
// null => standalone value
// undefined =>
// symbol => used for uniqueness. will know about during reactJS.
// Object

console.log(typeof name);
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof state);
console.log(typeof undefined);