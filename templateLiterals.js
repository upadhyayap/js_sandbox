'use strict';

//  Template Literals part of ES6
const job = 'Web developer';
const city = 'miami';

//  ES5 way
let html = '<ul><li>Name: '+ name +'</li><li> Age: '+ 
age +'</li> <li> Job: '+job+'</li> <li> City: '+city+'</li></ul>';

html = '<ul>' +
        '<li> Name: '+ name +'</li>' +
        '<li> Age:  '+ age +'</li>' +
        '<li> Job:  '+ job +'</li>'+
        '<li> City: '+ city +'</li> </ul>';

//  With template literals ES6
function hello(){
    return 'hello';
}

html = `
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2+2}</li>
    <li>${hello()}</li>
</ul>
`;

document.body.innerHTML = html;