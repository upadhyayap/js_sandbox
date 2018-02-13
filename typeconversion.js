'use strict';

//  Type converstion
let val;
//  Number to String
val = String(5);
val = String(4+4);

// Boolean to string
val = String(true);

val = String(new Date())

// Array to string

val = new String([1,2,3,4])

val = (5).toString();
val = (true).toString;
//  output
console.log(val);
console.log(typeof val);
console.log(val.length);


// String to Number

val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
//  NaN   not a number
val = Number('Hello');

val = parseInt('100');
val = parseFloat('100.30');

console.log(val);
console.log(typeof val);
console.log(val.toFixed());

//  Type coersion  javascript does it itself

const val1 = String(5);
const val2 = 6;
const sum = val1+val2;

console.log(sum);
console.log(typeof sum);