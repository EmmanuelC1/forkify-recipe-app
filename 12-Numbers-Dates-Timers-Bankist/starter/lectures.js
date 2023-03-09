'use strict';

/////////////////////////////////////////////////
// Converting and Checking Numbers
/*
// Numbers are always floating point numbers
console.log(23 === 23.0);

// Base 10 –– 0 to 9
// Binary base 2 –– 0 and 1 (JS is 64 Base 2 format)
console.log(0.1 + 0.2); // adds extra zeros at the end
console.log(0.1 + 0.2 === 0.3); // should be true, but is false because of JS being base 2

// Convert Strings to Numbers
console.log(Number('23'));
console.log(+'23'); // type coercion turns '23' to number from string

// Parsing
console.log(Number.parseInt('30px', 10)); // 30, JS gets rid of 'px'. (10 is base 10)
console.log(Number.parseInt('e23', 10)); // NaN, string has to start with number (10 is base 10)

console.log(Number.parseInt('   2.5rem   ')); // 2
// parseFloat should be GOTO whenever you need to read value out of string
console.log(Number.parseFloat('   2.5rem   ')); // 2.5

// isNaN (okay way to check numbers but some limitation/extreme cases)
console.log(Number.isNaN(20)); // false, it is a number
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20x')); // true, not a number
console.log(Number.isNaN(23 / 0)); // false, inifity = division by 0

// isFinite (better than isNaN to check numbers) This should be the GOTO
console.log(Number.isFinite(20)); // true, it is a number
console.log(Number.isFinite('20')); // false, not a number
console.log(Number.isFinite(+'20x')); // false, not a number
console.log(Number.isFinite(23 / 0)); // false, infinity is not finite

// isInteger
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false
*/

/////////////////////////////////////////////////
// Math and Rounding
/*
// Square Root
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5 (same as sqrt)
console.log(8 ** (1 / 3)); // 2 (cubic root)

// Max
console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23 (does type coercion)
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN (does NOT do parsing)

// Min (same rules as max)
console.log(Math.min(5, 18, 23, 11, 2)); // 2

// PI
console.log(Math.PI); // 3.141592653589793

// suppose you want to calc radius of circle with 10 px (10px retrieved from UI)
console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793

// Random (returns random number between 0 and 1)
console.log(Math.trunc(Math.random() * 6) + 1); // random number from 1 to 6

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...max
console.log(randomInt(10, 20));

// Rounding Integers (all methods do type coercion)
console.log(Math.trunc(23.9)); // 23, removes any decimal

console.log(Math.round(23.9)); // 24, rounds to nearest integer
console.log(Math.round(23.3)); // 23, rounds to nearest integer

console.log(Math.ceil(13.3)); // 14, rounds up
console.log(Math.ceil(13.9)); // 14, rounds up

console.log(Math.floor(15.3)); // 15, rounds down
console.log(Math.floor(15.9)); // 15, rounds down

// negative numbers
console.log(Math.trunc(-33.3)); // -33, takes decimal off
console.log(Math.floor(-33.3)); // -34, rounding down

// Rounding Decimals (all methods do type coercion)
console.log((2.7).toFixed(0)); // '3' returns string
console.log((2.7).toFixed(3)); // '2.700' returns string
console.log((2.345).toFixed(2)); // '2.35' returns string
console.log(+(2.345).toFixed(2)); // 2.35, as a number because of type coercion (+)
*/
