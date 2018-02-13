'use strict';

const firstName = 'william';
const lastName = 'johnson';

//  concatenation
val = firstName + ' ' + lastName;
//  Appending
val = 'Brad ';
val += 'Travery';

val = 'Hello My name is ' + firstName + 'and I am ' + age;

//  template Literals and escaping
val = 'Thats\'s awsome, I can\'t wait';
val = firstName.length;
val = firstName.concat(lastName);
val = firstName.toLowerCase();
val = firstName.toUpperCase();

//  Strings can also be treated as a read only arrays
val = firstName[0];

val = firstName.indexOf('w');
val = firstName.lastIndexOf('l');
// -1 if char is not found
val = firstName.charAt(0); 

val = firstName.charAt(firstName.length -1);
val = firstName.substring(0, 4);
val = firstName.slice(0, 4);
val = 'Hello there, my name is Brad'.split(' ');
val = 'Hello there, my name is Brad'.replace('Brad', 'Anand');
val = firstName.includes('lli');
val = firstName.includes('foo');

console.log(firstName + lastName);
console.log(val);
