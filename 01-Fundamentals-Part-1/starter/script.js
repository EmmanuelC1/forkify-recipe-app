////////////////////////////////////
// Linking a JavaScript File
/*

let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

*/

//variable name rules:
/*
    let 3years = 3; //cannot start with numbers
    let jonas&matilda = 'JM'; //no symbols ('$' is allowed)
    let new = 27; //'new' is a reserved keyword; (other keywords: 'function', 'name' (somtimes works, but can cause bugs))
    let Person = 'Jonas' //variables should not start with uppercase, usually used for objects
    let PI = 3.1415
*/

////////////////////////////////////
// Data Types
/*

let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true); //boolean
console.log(typeof javascriptIsFun); //boolean
//console.log(typeof 23); //number
//console.log(typeof 'Jonas'); //string

javascriptIsFun = 'YES!'; //change value of variable and change data type: number -> string
console.log(typeof javascriptIsFun); //string

let year;
console.log(year); //undefined
console.log(typeof year); //undefined

year = 1991;
console.log(year); //1991
console.log(typeof year); //number

*/

////////////////////////////////////
// let, const, and var
/*

let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990; //error: assigment to constant variable

const job; //error: missing initilizer in const declaration. (variable will always be undefined because const is immutable)

*/

////////////////////////////////////
// Basic Operators
/*

// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Emmanuel';
const lastName = 'Castillo';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5;
x += 10;
x++;
console.log(x); //26

// Comparison Operators
console.log(ageJonas > ageSarah); //true
console.log(ageSarah >= 18); //true
// const isFullAge = ageSarah >= 18; //isFullAge = true (boolean)

*/

////////////////////////////////////
// Operator Precedence
/*

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge);

*/

////////////////////////////////////
// Strings and Template Literals
/*

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const currentYear = 2023;

const jonas = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' year old ' + job + '.';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}.`;
console.log(jonasNew);

console.log(`template literals can be used for strings...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
with multiple
lines`);

*/

////////////////////////////////////
// If/Else Statements
/*

const age = 18;

if(age >= 18) {
    console.log("Sarah can start getting her driver's license. 🚗"); //emoji CMD+CTRL+SPACE
} else {
    const yearsLeft = 18-age;
    console.log(`Sarah is too young, wait ${yearsLeft} years until eligible.`);
}

const birthYear = 1991;
let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

*/

////////////////////////////////////
// Type Conversion and Coercion
/*

//Type Conversion: manually convert from one type to another
const inputYear = '1991';
console.log(Number(inputYear)); //returns inputYear as Number, but doesn't actually change the original data type.
console.log(inputYear + 18); //199118 –– doesn't really work since 1991 is still a string
console.log(Number(inputYear) + 18); //2009 –– correct calculation now

console.log(Number('Jonas')); //NaN (Not a Number), invalid number
console.log(String(23), 23); //'23' 23

//Type Coercion: when JS automatically comverts types behimd the scenes. happens implicitly 
console.log('I am ' + 23 + ' years old.'); //'I am 23 years old.'
console.log('23' - '10' - 3); //10 –– minus operator triggered the opposite  conversion (Strings to Number)
console.log('23' + '10' + 3); //'23103' –– addition operator converts Numbers to Strings. (concatenation)
console.log('23' * '2'); //46 –– thats the only way the * and / operator can work and makes sense.

let n = '1' + 1; //'11'
n = n - 1; //10
console.log(n); //10

*/

////////////////////////////////////
// Truthy and Falsy Values
/*

//In JS there are only 5 falsy values –– 0, '', undefined, null, NaN
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas')); //true
console.log(Boolean({})); //true –– empty object

//Type Coercion in if/else statement
const money = 0;
if(money) {
    console.log("Buy yourself something nice.");
} else {
    console.log('You should get a job.');
}

*/

////////////////////////////////////
// Equality Operators: == vs ===
/*

const age = 18;

// Strict Equlaity Operator (=== and !==) will return a true or false (boolean) value. Does NOT perform Type Coercion
if(age === 18) console.log('You are now considered an adult. (strict)'); //true
if(age === '18') console.log('You are now considered an adult. (strict)'); //false

// Loose Equality Operator (== and !=) Does perform Typer Coercion.
if(age == 18) console.log("You're now an adult. (loose)"); //true
if(age == '18') console.log("You're now an adult. (loose)"); //true through type coercion

//General Rule: Always try to use Strict Equality Operator (=== or !==)

//getting input from users
const favoriteNumber = prompt("What's your favorite number?");
console.log(favoriteNumber); //'8' –– string

if(favoriteNumber === 8) { //'8' === 8 ––> false
    console.log('Cool! 8 is an amazing number');
}
//So change line 239 to: const favoriteNumber = Number(prompt("What's your favorite number?"));

*/

////////////////////////////////////
// Boolean Logic
/*
//CODE HERE
*/

////////////////////////////////////
// Logical Operators
/*
//CODE HERE
*/

////////////////////////////////////
// Switch Statement
/*
//CODE HERE
*/

////////////////////////////////////
// Statements and Expressions
/*
//CODE HERE
*/

////////////////////////////////////
// Conditional (Ternary) Operator
/*
//CODE HERE
*/

////////////////////////////////////
// JavaScript Releases: ES5, ES6+ and ESNext
/*
//CODE HERE
*/