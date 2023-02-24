'use strict';

///////////////////////////////////////
// Default Parameters
// /*

const bookings = [];

//prettier-ignore
const createBooking = function (flightNo, numPassengers = 1, price = 199 * numPassengers) {
  // old way of setting default values (ES5)
  //   numPassengers = numPassengers || 1; //short-circuiting (if numPassenger is falsy (undefined), then 1 would default)
  //   price = price || 199;

  const booking = {
    // Enhanced Object Literal (no need to define value for properties)
    flightNo,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); //default values for numPassenger and price
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

// Skipping parameters (with undefined)
createBooking('LH123', undefined, 1000); // flightNo = 'LH123', numPassenger = 1, price = 1000
// */

///////////////////////////////////////
// How Passing Arguments Works: Value vs Reference
// JS does NOT have pass in by reference
// /*

const flight = 'LH234';
const emmanuel = {
  name: 'Emmanuel Castillo',
  passport: 24739479284,
};

const checkIn = function (flightNo, passenger) {
  flightNo = 'LH999'; // suppose flightNo changes
  passenger.name = 'Mr. ' + passenger.name;

  // suppose we get the passport number from a database containing all numbers of passport in the flight
  if (passenger.passport === 24739479284) {
    console.log('Checked in');
  } else {
    console.log('Wrong Passport Number!');
  }
};

checkIn(flight, emmanuel);
// console.log(flight); // flight was not changed (stays 'LH234') -> passed in copy
// console.log(emmanuel); // object was changed (name: 'Mr. Emmanuel Casitllo) -> copied object that points to the same object in heap

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(emmanuel); // change passport number
checkIn(flight, emmanuel); // 'Wrong Passport Number!'
// */

///////////////////////////////////////
// First-Class & Higher-Order Functions
// in notes.js

///////////////////////////////////////
// Functions Accepting Callback Functions
// JS uses callbacks all the time
// /*

// returns str all lowercase with no spaces
const oneWord = str => str.replaceAll(' ', '').toLowerCase();

// return joined array with firstWord uppercase and the rest the same
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`); //fn.name: 'upperFirstWord' || 'oneWord'
};

transformer('JavaScript is the best!', upperFirstWord); //callback function: upperFirstWord
transformer('JavaScript is the best!', oneWord); //callback function: oneWord

const highFive = () => console.log('✋🏼');
document.body.addEventListener('click', highFive); //high-order: 'addEvenListener', callback: 'highFive'

// forEach method
['Emmanuel', 'Martha', 'Adam'].forEach(highFive); //callback: 'highFive'
// */

///////////////////////////////////////
// Functions Returning Functions
// /*

const greet = function (greeting) {
  return function (name) {
    //closures allow us to use 'greeting' variable here
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey'); //greeterHey becomes anonymous function inside greet() because it returns a function that we store
greeterHey('Emmanuel');

// we can do it in one go (Functional Programming)
greet('Hello')('Emmanuel');

// Rewriting above functions as Arrow Functions
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

const greeterArrowHey = greetArrow('Hi');
greeterArrowHey('Emmanuel');
greetArrow('HI')('Emmanuel');
// */

///////////////////////////////////////
// The Call and Apply Methods
// /*

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  // Enhanced Object Literal (no need to write 'function')
  book(flightNum, name) {
    //prettier-ignore
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name }); //pushing an object into booking array
  },
};

lufthansa.book(239, 'Emmanuel Castillo');
lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

const euroWings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// book(23, 'Sarah Williams'); //does not work 'this' = undefined

// Call Method (we can specify what object 'this' points to (first argument))
book.call(euroWings, 23, 'Sarah Williams');
book.call(lufthansa, 239, 'John Doe');
// console.log(euroWings);
// console.log(lufthansa);

// we can now keep using the same book() function
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mariah Torres');

// Apply Method (specifies 'this' keyword as well, but takes in array of arguments instead)
const flightData = [583, 'Juan Doe'];
book.apply(swiss, flightData); //not used as much anymore because of call method (and spread operator)

book.call(swiss, ...flightData);

// console.log(swiss);
// */

///////////////////////////////////////
// The Bind Method
// Bind does not immediately call the function, instead it returns a new function where 'this' is bound
// /*

const bookEW = book.bind(euroWings); // binds 'this' to euroWings and stores function into 'bookEW'
const bookLH = book.bind(lufthansa); // binds 'this' to lufthansa
const bookLX = book.bind(swiss); // binds 'this' to swiss
bookEW(23, 'Steven Williams');

// We can create a function for a specific airline AND flight (partial application)
const bookEW23 = book.bind(euroWings, 23); // binds 'this' to euroWings flight EW23
bookEW23('Emmanuel Castillo'); // books for euroWings flight 23 (EW23)
bookEW23('Mariah Torres');

console.log(lufthansa);
console.log(euroWings);
console.log(swiss);

// Objects with Event Listeners
// add property and method to just 'lufthansa'
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  // 'this' = button element beacuse handler func is attached to Event Handler func and this always points to element
  // on which that handler is attached to (this case, <button class = 'buy'>)
  // console.log(this);

  this.planes++;
  console.log(this.planes); // NaN, because this does not point to obj, it points to button element
};

// Solution to above problem: Bind 'this' to lufthansa object, using bind() (since it returns function and does not call like call() would)
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //prettier-ignore
// Now 'this' = lufthansa, and buyPlane should properly work

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// another tax function with 'this' = null (we dont need it), and rate = .23
const addVAT = addTax.bind(null, 0.23);
// same as writing const addVAT = (value) => value + value * .23;

console.log(addVAT(100));
console.log(addVAT(23));

// practice: turn (partial application examples) to function returning function
const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

// Arrow Function solution:
// const addTax2 = rate => value => value + value * rate;

const addVAT2 = addTax2(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
// */

///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
// Function that is only executed once, and never again.
// /*

// we wrap function expression in () and call it () right after.
(function () {
  console.log('This will never run again!');
})();

// Arrow Function version
(() => console.log('This will ALSO never run again!'))(); // wrap function in () and call it right after using ()

// This works because we turn the value into an expression and call it, without ever storing it in a variable to call it again
// All data inside IIFE functions are considered private or encapsulated.
// */

///////////////////////////////////////
// Closures
// notes on closures in notes.js
// /*

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking(); // booker becomes function (anonymous function inside secureBooking())
booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

// We can take a look at the internal scope property (basically the Variable Environment of 'booker')
console.dir(booker);
// */

///////////////////////////////////////
// More Closures Examples
// /*

// Example: 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // 46
console.dir(f);

// Re-assigning f function
h();
f(); // 1554
console.dir(f);

// Example: 2
const boardPassengers = function (numPassengers, waitTime) {
  const perGroup = numPassengers / 3;

  // this callback function has access to 'numPassengers' and 'perGroup' because of closures
  setTimeout(function () {
    console.log(`We are now boarding all ${numPassengers} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, waitTime * 1000); //1000 milliseconds

  console.log(`Will start boarding in ${waitTime} seconds`);
};

// Prove that closures have priority over scope chain (callback function will use 'perGroup' from closure before global scope chain)
const perGroup = 1000;
boardPassengers(180, 3);
// */
