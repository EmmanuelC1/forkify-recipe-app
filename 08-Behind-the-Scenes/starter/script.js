'use strict';

///////////////////////////////////////
// Scoping in Practice

// /*

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

// */

///////////////////////////////////////
// Hoisting and TDZ in Practice

// /*
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

// */

///////////////////////////////////////
// 'this' Keyword in Practice

// /*
console.log(this); //global window object

const calcAvg = function (a, b) {
  console.log(a + b / 3);
  console.log(this); //undefined (strict mode)
};

calcAvg(5, 15);

const calcAvgArrow = (a, b) => {
  console.log(a + b / 3);
  console.log(this); //global window object (arrow function does not get this keyword)
};

calcAvgArrow(5, 15);

const emmanuel = {
  firstName: 'Emmanuel',
  year: 1997,

  calcAge: function () {
    console.log(2023 - this.year);
    console.log(this); //object calling the function (emmanuel object in this case)
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

emmanuel.calcAge(); //this = emmanuel obj

const matilda = {
  year: 2017,
};

//method borrowing
matilda.calcAge = emmanuel.calcAge; //copy calcAge method from emmanuel obj to matilda obj
matilda.calcAge(); //this = matilda obj

//copy method into f variable, so f becomes a function
const f = emmanuel.calcAge;
// f(); // this = undefined

emmanuel.greet(); // 'Hey undefined' (this used in arrow function)
emmanuel.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments); //returns array wit arguments passed in function
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12); //can pass more arguments than expected in function.. arguments keyword lets us use them

var addArrowFunc = (a, b) => {
  // console.log(arguments); //error, arrow functions do NOT have arguments keyword
  return a + b;
};

addArrowFunc(2, 5);

// */

///////////////////////////////////////
// Primitives vs Objects (Primitive vs Reference Types)

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica; //copy object
marriedJessica.lastName = 'Davis'; //change last name on new object

//lastName was changed on both because Objects (reference types) are saved in Heap,
// therefore both object point to the same place in memory. so changing one changes the other

console.log('Before marriage:', jessica); //{firstName: Jessica, lastName: Davis, age: 27}
console.log('After marriage:', marriedJessica); //{firstName: Jessica, lastName: Davis, age: 27}

//Copying Objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); //creates a shallow copy

jessicaCopy.lastName = 'Davis';

console.log('Before marriage:', jessica2); //{firstName: Jessica, lastName: Williams, age: 27}
console.log('After marriage:', jessicaCopy); //{firstName: Jessica, lastName: Davis, age: 27}

//Both objects get new array elements (beacuse of shallow copy)
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('jessica', jessica2); //same family members as jessicaCopy
console.log('jessicaCopy', jessicaCopy);
