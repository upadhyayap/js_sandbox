'use strict';

//  create some arrays
const nums = [1,2,3,4];
nums.push(250);
nums.unshift(120);
const nums2 = new Array(22,3,45,6);
const fruits = ['Apple','banana'];
const mixed = ['a', 1,true, undefined]
console.log(nums);
console.log(nums2);
console.log(fruits);
console.log(mixed);

let arrayVal;
//  get array length
arrayVal = nums.length;
//  Check if is array
arrayVal = Array.isArray(nums);
arrayVal = nums[0];
arrayVal = nums.indexOf(2);
arrayVal = nums.pop();
nums.splice(1,1);
nums.reverse();
nums.concat(nums2);
arrayVal = nums.sort();

//  USe the compare function
arrayVal = nums.sort(function (x, y) {
   return x - y; 
});


function under50(num){
    return num < 50;
}

arrayVal = nums.find(under50);

console.log(arrayVal);