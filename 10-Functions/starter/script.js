'use strict';

///////////////////////////////////////
// Default Parameters
/*
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
*/

///////////////////////////////////////
// How Passing Arguments Works: Value vs Reference
/*
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

// JS does NOT have pass in by reference
*/

///////////////////////////////////////
// First-Class & Higher-Order Functions
// in notes.js
