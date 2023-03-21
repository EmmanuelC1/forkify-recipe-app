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

/////////////////////////////////////////////////
// Prototypal Inheritance on Built-In Objects

console.log(emmanuel.__proto__); // Shows Perons.prototype
console.log(emmanuel.__proto__.__proto__); // Shows Object.prototype (top of prototype chain)
console.log(emmanuel.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor); // constructor itself

// Arrays
const arr = [3, 6, 6, 5, 6, 9, 9]; // same as using 'new Array'
console.log(arr.__proto__); // shows all array methods inherited
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__); // shows Object.prototype (top of prototype chain)

// Creating a new method to the prototype that all arrays can inherit
// Generally not a good idea, in the case that JS update has a new method with the same name
Array.prototype.unique = function () {
  // Method returns all unique elements of an array
  return [...new Set(this)];
};

console.log(arr.unique()); // [3, 6, 5, 9]

// more built-in objects
const h1 = document.querySelector('h1');

// all DOM elements are objects
console.dir(h1); // shows all properties and methods

// functions are also objects
console.dir(x => x + 1);
