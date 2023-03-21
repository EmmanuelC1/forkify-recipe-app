'use strict';

/////////////////////////////////////////////////
// Constructor Functions and the 'new' Operator

const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create methods in constructor functions! (bad for performance, creates copy to every object)
  //   this.calcAge = function () {
  //     console.log(2023 - this.birthYear);
  //   };
};

const emmanuel = new Person('Emmanuel', 1997);
// 4 steps behind the scenes of calling the 'new' operator
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} is linked to prototype (creates __proto__ property and sets it to the prototype property of the constructor func)
// 4. function automatically returns {}
console.log(emmanuel);

const jonas = new Person('Jonas', 1991);
const jack = new Person('Jack', 1975);
console.log(jonas, jack);

console.log(emmanuel instanceof Person); // true

/////////////////////////////////////////////////
// Prototypes

// Each function in JS automatically has a property called prototype. And that includes constructor functions.
// Every object that is created by a certain constructor function will get access to all the methods and properties
// that we define on the constructors prototype property.

// All Person objects will inherit this method
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

emmanuel.calcAge();
jonas.calcAge();

// Prototype of emmanuel object
console.log(emmanuel.__proto__);
console.log(emmanuel.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(emmanuel)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// All Person objects will inherit this property
Person.prototype.species = 'Homo Sapiens';

console.log(emmanuel); // this new 'species' property wont show up directly in the object...
console.log(emmanuel.species); // ...but each object will have access to it
console.log(jonas.species);

// check for properties
console.log(emmanuel.hasOwnProperty('firstName')); // true
console.log(emmanuel.hasOwnProperty('species')); // false
