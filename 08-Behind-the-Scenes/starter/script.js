'use strict';

///////////////////////////////////////
// Scoping in Practice

/*

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      //block scope
      var millenial = true;

      //creating new variable with same name as outer scope's variable
      const firstName = 'Jonas'; //Scope Chain uses local scope first so 'Emmanuel' doesnt get used since 'Jonas' was found first

      const str = `Oh, and you're a millenial, ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUPUT!'; // try to re-assign existing outer scope's variable
    }

    // console.log(str); //ReferenceError: str defined in block scope
    console.log(millenial); //true, var is not block scope, they are function scope
    // add(2, 3); //ReferenceError add(a, b) defined in block scope
    console.log(output); //'NEW OUTPUT!'
  }
  printAge();

  return age;
}

const firstName = 'Emmanuel';
calcAge(1996);

*/

///////////////////////////////////////
// Hoisting and TDZ in Practice

// Hoisting with Variables

console.log(me); //undefined
// console.log(job); //ReferenceError: Cannot access 'job' before initialization
// console.log(year); //ReferenceError: Cannot access 'job' before initialization

var me = 'Emmanuel';
let job = 'Developer';
const year = 1997;

// Hoisting with Functions

console.log(addDeclaration(2, 3));
// console.log(addExpression(2, 3)); //ReferenceError: Cannot access 'addExpression' before initialization
// console.log(addArrow(2, 3)); //ReferenceError: Cannot access 'addArrow' before initialization

function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Pitfall of Hoisting Example

console.log(numProducts); //undefined so if statement meets condition even though, we then declare numProducts = 10
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted.');
}

//Best practice is to NOT use var and use const and let instead. Always declare variables at the top of the scope
//Always declare all your functions first and use them after the declaration

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); //variables declared with var will create a property on the global window object
console.log(y === window.y);
console.log(z === window.z);
