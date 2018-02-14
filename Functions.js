'use strict';

//  Function Decleration

//  JsDoc
/**
 * Greet function.
 * @returns String
 */
function greet(name = 'default') {
    //ES5 way
    // if(typeof name === 'undefined'){
    //     name = 'default';
    // }
    return `Hello ${name}`;
}

console.log(greet('Anand'));
console.log(greet());

//  Function Expression
// putting a function to  a variable assignment

const square = function (x = 3) {
    return x*x;
};

console.log(square(8));

// Immediatly Inokable functions

(function () {
    console.log('IIFE Ran..');
})();

(function (name) {
    console.log('Hello '+name);
})('Anand');

//  Property method
const todo = {
    add: function () {
        console.log('add to do');
    }
};

todo.delete  = function () {
  console.log('deleted');  
};

console.log(todo.add());
console.log(todo.delete());