"use strict";

// Log to console

console.log('Hello world');
console.log('12');
console.log([1, 2, 3]);
console.log({a: 1, b: 2});
//console.table({a: 1, b: 2});
console.error('This is some error');
//  console.clear();
console.warn('this is warning');
console.time('Hello');
    console.log('Hello world');
    console.log('Hello world');
    console.log('Hello world');
    console.log('Hello world');
    console.log('Hello world');
console.timeEnd('Hello');

//  strings can be single quote or double quote
var name = 'john Doe';
console.log(name);
name = 'steve smith';
console.log(name);

//  Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

//  js variables can only includes letters, numbers, _ and $
//  can not start with number

//  LET, It is same as var on global scope but differs on block scoping
let newName = 'john Doe';
console.log(newName);
newName = 'steve smith';
console.log(newName);

//  CONST immutable variable can not be reassigned. Have to assign a value

const person = {
    name:'person',
    age:30
}

//  value inside the object can be changed but object itself can ot be changed
person.name = 'sara';
console.log(person);

const numbers = [1,2,3,4];
numbers.push(5);
console.log(numbers);

//  Data Types
//  primitive
//String
const namevar = 'Anand';
console.log(typeof namevar);
//  Number
const age = 45;
console.log(typeof age);

//  Boolean
const haskids = true;
console.log(typeof haskids);
const car = null;
console.log(car);

let test;
console.log(typeof test);

const sym = Symbol();
console.log(typeof sym);

//  Reference types

const hobbies = ['movies', 'music'];
console.log(typeof hobbies);

const address = {
    city: 'hyd',
    state: 'MA'
}

console.log(typeof address);

const today = new Date();

console.log(typeof today);


const users = [
    {id:1, name:'Anand'},
    {id:2, name:'Shreya'},
    {id:3, name:'karen'}
];

users.forEach(function (user, index) {
    console.log(`user name is ${user.name} and he is at ${user.id}`);
});

const ids = users.map((user) => {return user.id;});

console.log(ids);

const user = {
    firstName: 'Anand',
    lastName: 'Shreya',
    age: 30
};

for(let x in user){
    console.log(user[x]);
}


// Scoping

//  Global scope

var a = 1;
let b = 2;
const c = 3;

//  Function Scope
function testScope(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`function  Scope ${a} ${b} ${c}`);
}
testScope();

//  Block level scope - anything that is wrapped in curly braces if or loops 

if (true) {
    var a = 7;
    let b = 8;
    const c = 9;
    console.log(`Block  Scope ${a} ${b} ${c}`);
}

console.log(`global Scope ${a} ${b} ${c}`);

