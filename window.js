'use strict';

//  Window method /objects /properties

//window.alert('hello');

// const input = prompt();

// console.log(input);

// if(confirm('Are you sure')){
//     console.log('done');
// } else {
//     console.log('done');
// }

let winprops;

winprops = window.outerHeight;
winprops = window.screenY;

console.log(winprops);

// Location object

let locationObj = window.location;
let search = window.location.search;

// Redirect
//window.location.href = 'http://google.com';

// History Object

//window.history.go(-1);

locationObj = window.history.length;

//  navigator object
let windownav;
windownav = window.navigator.platform;
windownav = window.navigator.appVersion;

console.log(locationObj);
console.log(search);
console.log(window.navigator);
console.log(windownav);