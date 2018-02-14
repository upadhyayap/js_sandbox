'use strict';

const firstName = 'william';
const lastName = 'johnson';

//  concatenation
let stringVal = firstName + ' ' + lastName;
//  Appending
stringVal = 'Brad ';
stringVal += 'Travery';

stringVal = 'Hello My name is ' + firstName + 'and I am ' + 45;

//  template Literals and escaping
stringVal = 'Thats\'s awsome, I can\'t wait';
stringVal = firstName.length;
stringVal = firstName.concat(lastName);
stringVal = firstName.toLowerCase();
stringVal = firstName.toUpperCase();

//  Strings can also be treated as a read only arrays
stringVal = firstName[0];

stringVal = firstName.indexOf('w');
stringVal = firstName.lastIndexOf('l');
// -1 if char is not found
stringVal = firstName.charAt(0); 

stringVal = firstName.charAt(firstName.length -1);
stringVal = firstName.substring(0, 4);
stringVal = firstName.slice(0, 4);
stringVal = 'Hello there, my name is Brad'.split(' ');
stringVal = 'Hello there, my name is Brad'.replace('Brad', 'Anand');
stringVal = firstName.includes('lli');
stringVal = firstName.includes('foo');

console.log(firstName + lastName);
console.log(stringVal);
