'use strict';

/////////////////////////////////////////////////
// Constructor Functions and the 'new' Operator
/*
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
*/

/////////////////////////////////////////////////
// ES6 Classes
/*
// Class Expression
// const PersonClass = class {};

// Class Declaration
class PersonClass {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods (will be added to .prototype property of the class, not objects themselves)
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonClass('Jessica', 1990);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonClass.prototype); // true

// Adding method to prototype manually
// PersonClass.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

// 1. Classes are NOT hoisted, even class if they are class declarations (cannot use before declaration)
// 2. Classes are first-class citizens (we can pass them into functions, and return them from functions)
// 3. Classes are executes in strict mode
*/

/////////////////////////////////////////////////
// Getters and Setters
/*
// Objects
const account = {
  owner: 'emmanuel',
  movements: [200, 530, 120, 300],

  // Getters
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // Setters
  set latest(mov) {
    this.movements.push(mov);
  },
};

// GETTER dont call the method, use it as a property
console.log(account.latest); // 300

// SETTER dont call the method, use it as a property
account.latest = 50;
console.log(account.movements); // [200, 530, 120, 300, 50]

// Clasess
class PersonGetterSetterClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Methods (will be added to .prototype property)
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  // Setters

  // setting a property that already exists
  set fullName(name) {
    // to avoid a naming conflict where JS tries to set 'fullName' property in both constructor and setter
    // we use a naming convention on the property adding a '_' before property. This creates a new property
    // so this is a work around, not a solution (we also have to set a getter for this new property)
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name.`);
  }

  // Getters
  get fullname() {
    return this._fullName;
  }

  get age() {
    return 2023 - this.birthYear;
  }

  // Static Method
  static hey() {
    console.log('Hey there! 👋');
    console.log(this); // this = entire class
  }
}

const manny = new PersonGetterSetterClass('Emmanuel Castillo', 1997);

const walt = new PersonGetterSetterClass('Walter', 1965);

/////////////////////////////////////////////////
// Static Methods

// .from method converts any (array like) iterable object to an actual array
Array.from(document.querySelectorAll('h1')); // returns nodeList

// .from method is attached to the Array constructor, so we could not use the .from methods on an array
// [1, 2, 3].from(); // will not work since arrays dont inherit this method
// ".from method is in the Array name space"

// Adding a Static Method to constructor functions (top of the file)

// Person.hey = function () {
//   console.log('Hey there! 👋');
//   console.log(this); // this = entire contructor function
// };

// // calling static method (not inherited)
// Person.hey();

// NOT inherited by objects
// emmanuel.hey(); // error

// Adding Static Method to ES6 Classes
// (above in PersonGetterSetterClass declaration)
PersonGetterSetterClass.hey();

// not available on instances
// manny.hey(); // error
*/

/////////////////////////////////////////////////
// Object.create()
/*
const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  // not constructor function beacuse we dont use the 'new' Operator
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven); // {}
console.log(steven.__proto__); // {calcAge}

steven.firstName = 'Steven';
steven.birthYear = 2002;

console.log(steven); // {name: 'Steven', birthYear: 2002}
steven.calcAge(); // 21

console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge(); // 44
console.log(sarah); // {name: 'Sarah', birthYear: 1979}
*/

/////////////////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions
/*
// Person Class using Constructor Function
const PersonConstructorFunction = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Add Person method calcAge()
PersonConstructorFunction.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

// Add Person property 'species'
PersonConstructorFunction.prototype.species = 'Homo Sapiens';

// Student class (constructor function)
const Student = function (firstName, birthYear, course) {
  // using call to specify 'this' keyword in PersonConstructorFunction
  PersonConstructorFunction.call(this, firstName, birthYear);
  this.course = course;
};

// Make Student class a child class of PersonConstructorFunction class
// We have to link prototypes here before we create any more Student methods
Student.prototype = Object.create(PersonConstructorFunction.prototype);

// Add Student methods introduce()
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

// Create new Student Object
const mike = new Student('Mike', 1999, 'Computer Science');

mike.introduce(); // My name is Mike and I study Computer Science (from student class)
mike.calcAge(); // 24 (inherited from Person class)
console.log(mike.species); // Homo Sapiens (inherited from Person class)
console.log(mike.hasOwnProperty('course')); // true ('hasOwnProperty' method inherited from top of prototype chain Object.prototype)

console.log(mike instanceof Student); // true
console.log(mike instanceof PersonConstructorFunction); // true
console.log(mike instanceof Object); // true
*/

/////////////////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes
/*
// Person Class (ES6 Classes)
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Methods
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  // Setter
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name.`);
  }

  // Getter
  get age() {
    return 2023 - this.birthYear;
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log('Hey there 👋');
  }
}

// Student Class (ES6 Classes)
// 'extends' keyword links StudentCl prototype to PersonCl prototype (no need to do it manually w/ Object.create() like with constructor functions)
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // calls the constructor function of Parent class (ALWAYS needs to be first!)
    this.course = course;
  }

  // Instance Methods
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // Override Method (Polymorphism)
  calcAge() {
    console.log(`I'm ${2023 - this.birthYear} years old.`);
  }
}

const mariah = new StudentCl('Mariah Torres', 1999, 'Cosmetology');
console.log(mariah);
mariah.introduce();
mariah.calcAge();
*/

/////////////////////////////////////////////////
// Inheritance Between "Classes": Object.create()
/*
// Person prototype object for Person class
const PersonProto2 = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  // serves as a constructor but not a constructor since we dont use 'new' Operator for objects
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// Student prototype for Student class (empty object for now) but makes PersonProto2 parent of StudentProto
const StudentProto = Object.create(PersonProto2);

// init Method for StudentProto
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto2.init.call(this, firstName, birthYear);
  this.course = course;
};

// introduce Method for StudentProto
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

// Create StudentProto Object inheriting PersonProto
const stephen = Object.create(StudentProto);

stephen.init('Stephen', 1988, 'Sociology');
console.log(stephen);
stephen.introduce(); // My name is Stephen and I study Sociology.
stephen.calcAge(); // 35 (inherited from PersonProto2)
*/

/////////////////////////////////////////////////
// Another Class Example
// /*
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.locale = navigator.language;

    // Protected properties ('Fake' Encapsulation) –– add '_'
    // Still able to be used anywhere, but serves as a common convention in the industry
    // to show that these properties are 'protected'
    this._pin = pin;
    this._movements = [];

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  // Methods
  getMovements() {
    return this._movements;
  }

  deposit(value) {
    this._movements.push(value);
  }

  withdraw(value) {
    // this._movements.push(-value);
    this.deposit(-value); // we can use other methods like deposit
  }

  // Protected Method (only to be used internally, not publicly)
  _approveLoan(value) {
    return true;
  }

  requestLoan(value) {
    if (this._approveLoan(value)) {
      this.deposit(value);
    }
    console.log(`$${value} loan was approved.`);
  }
}

const acct1 = new Account('Emmanuel', 'USD', 1111);

acct1.deposit(250);
acct1.withdraw(80);
acct1.requestLoan(1000);
console.log(acct1.getMovements());

console.log(acct1);

// We need a way to make some methods and properties to be private and not accessible outside the class
// for exmaple, 'pin' and handler functions like 'approveLoan'. (Encapsulation in the next lecture, allow us to do that)
// console.log(acct1.pin);
// console.log(acct1.approveLoan(1000));
// */

/////////////////////////////////////////////////
// Encapsulation: Protected Properties & Methods
// JavaScript classes do no yet support real data privacy and encapsulation

// (Working with code from 'Another Class Example')
