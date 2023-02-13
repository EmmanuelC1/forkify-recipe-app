'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  //return array of starterMenu order and mainMenu order (2 items)
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //Objects as arguments for functions (destructuring w/ default values)
  //prettier-ignore
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) { 
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
};

///////////////////////////////////////
// Destructuring Arrays (ES6 Feature)
/*

const arr = [2, 3, 4];

// Normal Way
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// Destructuring Array
const [x, y, z] = arr; // [] on the left = destructuring. right side not affected
console.log(x, y, z);
console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second); // Italian Pizzeria

// Can skip an element in array (by leaving empty space)
let [cat1, , cat3] = restaurant.categories;
console.log(cat1, cat3); // Italian Vegetarian

// Swicthing Variables the Normal Way
// const temp = cat1;
// cat1 = cat3;
// cat3 = temp;
// console.log(cat1, cat3); // Vegetarian Italian

// Switching Variables w/ Destructuring
[cat1, cat3] = [cat3, cat1];
console.log(cat1, cat3); // Vegetarian Italian

const [starter, main] = restaurant.order(2, 0); //order: 'Garlic Bread' (starterMenu) and 'Pizza' (mainMenu)
console.log(starter, main); // Garlic Bread, Pizza

// Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // i = 2, j = [5, 6]

const [i, , [j, k]] = nested;
console.log(i, j, k); // i = 2, j = 5, k = 6

// Setting Default Values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // p = 8, q = 9, r = undefined

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // p = 8, q = 9, r = 1

*/

///////////////////////////////////////
// Destructuring Objects (ES6 Feature)
/*

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Custom Variable Names w/ Destructring Objects
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Values w/ Destructuring (for properties that are not found)
const { menu = [], starterMenu: starters = [] } = restaurant; //empty arr as default values
console.log(menu, starters);

// Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// {a, b} = obj; //error
({ a, b } = obj);
console.log(a, b); // 23 7

// Nested Objects
const {
  fri: { open: o, close: c },
} = hours; //hours is from 'Custom Variable Names' sub-section

console.log(o, c); // 11 23

// Objects as Arguments for Functions
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: '1 Main St.',
  starterIndex: 3,
});

*/

///////////////////////////////////////
// The Spread Operator (...)

const arr2 = [7, 8, 9];

// Normal Way
const badNewArr = [1, 2, arr2[0], arr2[1], arr2[2]];
console.log(badNewArr); // [1, 2, 7, 8, 9]

// Spread Operator (...)
const newArr = [1, 2, ...arr2];
console.log(newArr); // [1, 2, 7, 8, 9]
