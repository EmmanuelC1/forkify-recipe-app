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

/////////////////////////////////////////////////
// Remainder Operator
/*
console.log(5 % 2); // 1
console.log(8 % 3); // 2

// Even or Odd
console.log(6 % 2); // remainder = 0 -> even
console.log(7 % 2); // remainder != 0 -> odd

const isEven = n => n % 2 === 0;

console.log(isEven(8)); // true
console.log(isEven(9)); // false

// practice (set grey color in alternating rows in movements section)
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // every 2nd row (0, 2, 4, 6)
    if (i % 2 === 0) row.style.backgroundColor = 'lightgrey';

    // every 3rd row (0, 3, 6, 9)
    if (i % 3 === 0) row.style.backgroundColor = 'lavender';
  });
});
*/

/////////////////////////////////////////////////
// Numeric Separators (only allowed between numbers)
/*
// 287,460,000,000
const solarSystemDiameter = 287_460_000_000; // underscores make large numbers readable, JS ignores them
console.log(solarSystemDiameter); // 287460000000

const priceCents = 345_99; // 345.99 is more readable now
console.log(priceCents); // 34599

const transferFee1 = 15_00; // 15.00
const transferFee2 = 1_500; // 1,500

// But both are actually just 1500
console.log(transferFee1); // 1500
console.log(transferFee2); // 1500

// convert strings with numeric separators to numbers (NOT ALLOWED)
console.log(Number('230_000')); // NaN
console.log(parseInt('230_000')); // 230, wrong output
*/

/////////////////////////////////////////////////
// BigInt
/*
// Biggest Number JS can represent as integer because of base 64
// 53 bits used for storing actual value, the rest to store decimal places and sign (+, -)

console.log(2 ** 53 - 1); // 9007199254740991 -> 9,007,199,254,740,991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// in the case we need bigger numbers (ex. database IDs) we use BigInt

// BigInt Numerical Literal (add 'n' to end of number) to store as BigInt
console.log(546455892739875213875982359832569238472349724n); // 546455892739875213875982359832569238472349724n

// Bigint function (no 'n') to store as BigInt
console.log(BigInt(546455892739875)); // 546455892739875n

// Operations (work the same)
console.log(10000n + 10000n); // 20000n

// Mixing BihInt with regular numbers (NOT ALLOWED)
const huge = 897249870924873502n;
const num = 23;
console.log(huge * BigInt(num)); // 20636747031272090546n –– stored as BigInt
// console.log(huge * num); // Error –– cant mix
// console.log(Math.sqrt(16n)); // Error –– Math operations dont work with BigInt

// Logical Operations
console.log(20n > 15); // true
console.log(20n === 20); // false

// String concatination
console.log(huge + ' is REALLY big!!!'); // '897249870924873502 is REALLY big!!!'

// Division
console.log(10n / 3n); // 3n –– returns closest BigInt
*/
