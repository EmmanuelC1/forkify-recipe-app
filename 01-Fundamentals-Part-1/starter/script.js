////////////////////////////////////
// Linking a JavaScript File
// /*

let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let nameFirst = "Matilda";

console.log(nameFirst);

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

// */

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
// /*

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

// */

////////////////////////////////////
// let, const, and var
// /*

let myAge = 30;
myAge = 31;

const yearBorn = 1991;

//ERRORS –– things you can't do with 'const'
//yearBorn = 1990; //error: assigment to constant variable, yearBorn was declared already and cannot be changed
//const job; //error: missing initilizer in const declaration. (variable will always be undefined because const is immutable)

// */

////////////////////////////////////
// Basic Operators
// /*

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

// */

////////////////////////////////////
// Operator Precedence
// /*

let a, b;
a = b = 25 - 10 - 5;
console.log(a, b);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge);

// */

////////////////////////////////////
// Strings and Template Literals
// /*

const myFirstName = 'Jonas';
const job = 'teacher';
const myBirthYear = 1991;
const currentYear = 2023;

const jonas = "I'm " + myFirstName + ', a ' + (currentYear - myBirthYear) + ' year old ' + job + '.';
console.log(jonas);

const jonasNew = `I'm ${myFirstName}, a ${currentYear - myBirthYear} year old ${job}.`;
console.log(jonasNew);

console.log(`template literals can be used for strings...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
with multiple
lines`);

// */

////////////////////////////////////
// If/Else Statements
// /*

const ageSarahSarah = 18;

if(ageSarah >= 18) {
    console.log("Sarah can start getting her driver's license. 🚗"); //emoji CMD+CTRL+SPACE
} else {
    const yearsLeft = 18-ageSarah;
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

// */

////////////////////////////////////
// Type Conversion and Coercion
// /*

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

// */

////////////////////////////////////
// Truthy and Falsy Values
// /*

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

// */

////////////////////////////////////
// Equality Operators: == vs ===
// /*

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

// */

////////////////////////////////////
// Logical Operators
// /*

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired =  false; //Sarah is not tired.

console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

if(shouldDrive) {
    console.log('Sarah is able drive.');
} else {
    console.log('Someone else should drive...');
}

// */

////////////////////////////////////
// Switch Statement
// /*

const day = 'Monday';

switch(day) {
    case 'Monday': // day === 'Monday' does a Strict Comparison
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend 😎');
        break;
    default:
        console.log('Not valid day.');
}

// */

////////////////////////////////////
// Conditional (Ternary) Operator
// /*

// '?' called a ternary operator since it has 3 parts. Can be used as an if else statment in one line.

const drinkingAge = 23;
//condition ? runs code if condition is true : runs code if condition is false;
drinkingAge >= 21 ? console.log('I am old enough to drink wine 🍷'): console.log('I cannot drink alcohol so I will drink water 💧');

// Most commonly used to define variables conditionally
const drink = drinkingAge >= 21 ? 'wine 🍷' : 'water 💧';
console.log(drink); 

// if/else would require us to define the variable outside the {} and Condtional Ternary Operator allows us to define it in one line.
let drink2;
if(drinkingAge >= 21) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

// Ternary Operators can be used in Template Literals
console.log(`I like to drink ${drinkingAge >= 21 ? 'wine 🍷' : 'water 💧'}`);

// */

////////////////////////////////////
// JavaScript Releases: ES5, ES6+ and ESNext
/*

New relases have backwards compatability all the way to ES1
Old features are never removed in order or keep websites working forever. 
Code written 25+ years ago will still be accepted by teh Modern JavaScript Engine.

JavaScript is NOT forwards compatible however. Meaning if a user is using an outdated or old browser that does not 
 support ES6 JavaScript, the code wont work. To solve this problem since we cannot control what browser and version user use
 is to convert modern JavaScript versions back to ES5 using a process called 'transpilling' and also 'polyfilling'.
We can use a tool called 'Babel' to transpile our code. Transpilling back to ES5 should be done after development stage, and
 and during the production stage where you are gettign ready to ship it to users.

ES5 is fully supported in all browsers  down to IE9 (Internet Explorer) from 2011.
ES6+ –– (ES6 to ES2020): well supported in all modern browser, but no support in older browsers.
 can use (MOST) features in production with transpilling and polyfilling (check ES6 Compatibility Table).

ESNext –– (ES2021, ES2022, ... and all future releases) can already use (SOME) features in production with transpilling and
 pollyfilling. Features have to pass a four stage process to be able to be transpiled and polyfiled before using in production.

*/