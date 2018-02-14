'use strict';

//  Date API
let date;

const moment = new Date();
date = moment;
let birthday = new Date('9-10-1981');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

date = moment.getMonth();
date = moment.getDay();
date = moment.getMinutes();
date = moment.getHours();

console.log(date);