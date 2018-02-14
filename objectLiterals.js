'use strict';

const personobj = {
    firstName: 'steve',
    lastName: 'smith',
    age: 30,
    hobbies: ['music', 'sports'],
    address: {
        city: 'miami',
        state: 'florida'
    },
    getBirthYear: function () {
        return 2017 - this.age;
    }
}

let valPerson;

valPerson = personobj;

console.log(valPerson.firstName);
console.log(valPerson['firstName']);
console.log(valPerson.lastName);
console.log(valPerson.age);
console.log(valPerson.hobbies);
console.log(valPerson.address.city);
console.log(valPerson.address.state);
console.log(valPerson.getBirthYear());


const people = [{name: 'john', age: 30}, {name: 'mike', age: 45}]

for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element.name);
}

people.forEach(person => {
    console.log(person.age)
});