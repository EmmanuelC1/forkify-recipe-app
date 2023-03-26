'use strict';

/////////////////////////////////////////////////
// Coding Challenge #1
/*
  Your tasks: 
  1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current 
    speed of the car in km/h 

  2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console 

  3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console 

  4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them 

  Test data: 
  • Data car 1: 'BMW' going at 120 km/h 
  • Data car 2: 'Mercedes' going at 95 km/h
*/
// /*
// Task 1:
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed; // in km/h
};

// Task 2:
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h.`);
};

// Task 3:
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h.`);
};

// Task 4:
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(bmw);
bmw.accelerate(); // BMW is going at 130 km/h.
bmw.brake(); //BMW is going at 125 km/h.

console.log(mercedes);
mercedes.accelerate(); // Mercedes is going at 105 km/h.
mercedes.accelerate(); // Mercedes is going at 115 km/h.
mercedes.brake(); // Mercedes is going at 110 km/h.
// */

/////////////////////////////////////////////////
// Coding Challenge #2
/*
  Your tasks: 
  1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl') 

  2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6) 

  3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by 
    multiplying the input by 1.6) 

  4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter. 

  Test data: 
  • Data car 1: 'Ford' going at 120 km/h
*/
// /*
// Task 1
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed; // in km/h
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);

    // Used for chainging in Coding Challenge #4
    return this;
  }

  // Task 2: Getter
  get speedUS() {
    return this.speed / 1.6;
  }

  // Task 3: Setter
  set speedUS(speedMiles) {
    this.speed = speedMiles * 1.6;
  }
}

// Task 4
const ford = new CarCl('Ford', 120);

console.log(ford); // {make: 'Ford', speed: 120}
console.log(ford.speedUS); // 75

ford.accelerate(); // Ford is going at 130 km/h
ford.accelerate(); // Ford is going at 140 km/h
ford.accelerate(); // Ford is going at 150 km/h
console.log(ford); // {make: 'Ford', speed: 150}
console.log(ford.speedUS); // 93.75

ford.brake(); // Ford is going at 140 km/h
ford.speedUS = 65;
console.log(ford.speedUS); // 65
console.log(ford); // {make: 'Ford', speed: 104}
// */

/////////////////////////////////////////////////
// Coding Challenge #3
/*
  –– Uses code from Coding Challenge #1 

  Your tasks: 
  1. Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'. Besides a make and current 
    speed, the 'EV' also has the current battery charge in % ('charge' property) 

  2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo' 

  3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message 
    like this: 'Tesla going at 140 km/h, with a charge of 22%' 

  4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what 
  happens when you 'accelerate'! Hint: Review the definiton of polymorphism 😉 

  Test data: 
  • Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
*/
// /*
// Task 1
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Making EV child class of Car
EV.prototype = Object.create(Car.prototype);

// Task 2
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`${this.make}'s battery was charged to ${this.charge}%`);
};

// Task 3: Method Overriding (Polymorphism)
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

// Task 4
const tesla = new EV('Tesla', 120, 23);
console.log(tesla);

tesla.accelerate(); // Tesla is going at 140 km/h, with a charge of 22%
tesla.accelerate(); // Tesla is going at 160 km/h, with a charge of 21%
tesla.brake(); // Tesla is going at 155 km/h.
tesla.chargeBattery(90); // Tesla's battery was charged to 90%
// */

/////////////////////////////////////////////////
// Coding Challenge #3
/*
  –– Uses code from Coding Challenge #1 

  Your tasks: 
  1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class 

  2. Make the 'charge' property private 

  3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in
   the 'CarCl' class. Then experiment with chaining! 

  Test data: 
  • Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/
// /*
// Task 1
class EVCl extends CarCl {
  // Task 2: Private Fields
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.make}'s battery was charged to ${this.#charge}%`);

    // Task 3: chaining methods
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );

    // Task 3: chaining methods
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);

console.log(rivian); // EVCl {make: 'Rivian', speed: 120, #charge: 23}
console.log(rivian.speedUS); // 75

// Chaining Methods
rivian.accelerate().accelerate().accelerate().brake().chargeBattery(90);
console.log(rivian.speedUS); // 106.25
// */
