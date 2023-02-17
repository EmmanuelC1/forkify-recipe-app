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
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //Objects as Arguments for functions (destructuring w/ default values)
  //prettier-ignore
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) { 
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  // Spread Operator as Argument for function (spread operator in function call)
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },

  //Rest Parameters
  orderPizza(mainIngredient, ...otherIngredients) {
    // otherIngredients is an array
    let str = `Pizza has been ordered with main ingredient of ${mainIngredient}`;

    if (otherIngredients.length !== 0) {
      for (let i = 0; i < otherIngredients.length; i++) {
        str += `, ${otherIngredients[i]}`;
      }
    }

    console.log(str);
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

// Destructuring Array ([] on the left = destructuring. right side not affected)
const [x, y, z] = arr; 
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
// Iterables: arrays, strings, maps, sets. NOT objects (Spread Operator works on all Iterables)
// can only use Spread Operator when building an array or passing values into function
// (unpacks an array without manually iterating through it)
/*

const arr2 = [7, 8, 9];

// Normal Way
const badNewArr = [1, 2, arr2[0], arr2[1], arr2[2]];
console.log(badNewArr); // [1, 2, 7, 8, 9]

// Spread Operator (...)
const newArr = [1, 2, ...arr2];
console.log(newArr); // [1, 2, 7, 8, 9]

console.log(...newArr); // 1, 2, 7, 8, 9 (logs each element in newArr individually 🤯)

// Add new item to restaurant's mainMenu (creates a new variable array, not manipulating existing mainMenu in restaurant obj)
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// Copy array (shallow)
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 (or more) Arrays
const fullMenuCopy = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(fullMenuCopy);

const str = 'Emmanuel';
const letters = [...str, ' ', 'C.'];
console.log(...letters);

// Functions w/ Spread Operator
// const ingredients = [
//   prompt('Pasta ingredient 1:'),
//   prompt('Pasta ingredient 2:'),
//   prompt('Pasta ingredient 3:'),
// ];
const ingredients = ['chicken', 'parmesan', 'basil'];

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant); // copy of object w/ new properties

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // Ristorante Roma
console.log(restaurant.name); // Classico Italiano

*/

///////////////////////////////////////
// Rest Patterns & Parameters
/*

// 1) Destructuring

// SPREAD, beacuse of RIGHT side of '='
const anotherArr = [1, 2, ...[3, 4]];

// REST PATTERN, beacuse of LEFT side of '='
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // a = 1,  b = 2, others = [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); //'Pizza Risotto ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Objects
const { sat: satHours, ...weekdayHours } = restaurant.openingHours;
console.log(satHours);
console.log(weekdayHours); //thurs and fri opening hours objects

// 2) Functions (rest parameters)

// rest parameters get packed into an array called 'numbers'
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); //Spread unpacks array

restaurant.orderPizza('chicken', 'bacon', 'spinach', 'peppers');
restaurant.orderPizza('pepperoni'); //otherIngredients argument in function will be an empty array

*/

///////////////////////////////////////
// Short Circuiting (&& and ||)
/*

// Use ANY data type, return ANY data type, short-circuiting
console.log('--------- OR ---------');
console.log(0 || 'Emmanuel');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || null);

console.log('--------- AND ---------');
console.log(0 && 'Emmanuel');
console.log(7 && 'Emmanuel');
console.log('Hello' && 23 && null && 'Emmanuel');

// Practical Example (if checks if orderPizza property (method) exists)
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// (same as above) using short-circuiting to check if orderPizza property (method) exists
restaurant.orderPizza && restaurant.orderPizza('chicken', 'bacon');

restaurant.numGuests = 0;

// if numGuests = 0, it treats it as a falsy value and returns 10 when it should return 0
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// if numGuests = 0, it treats it as a falsy value and returns 10 when it should return 0
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

///////////////////////////////////////
// Nullish Coalescing (??) (ES2020)
// Nullish values: null and undefined (NOT 0 or '')

// if numGuests = 0, it treats it as 0 now and not falsy anymore. (correct way) only returns 10 if null or undefined
const guests3 = restaurant.numGuests ?? 10;
console.log(guests3);

*/

///////////////////////////////////////
// Logical Assignment Operators
/*

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// set a dafault numGuests for restaurant objects that do not have that property (short circuiting)
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// console.log(rest1);
// console.log(rest2);

// using logical assignments (OR Assignment Operator) does same thing as above
// What if numGuest = 0? it treats it as falsy... again (change in rest1 object)
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1);
// console.log(rest2);

// Correct Solution (Nullish Assignment Operator) if numGuests = 0 (change in rest1 object)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1); //numGuests = 0
console.log(rest2); //numGuests = 10

// if rest obj has owner, set to <ANONYMOUS>, if owner does not exist, do nothing
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// console.log(rest1); // owner: undefined (not what we want)
// console.log(rest2); // owner: <ANONYMOUS>

// (And Assigment Operator) if rest obj has owner, set to <ANONYMOUS>, if owner does not exist, do nothing
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1); // no owner property (correct)
console.log(rest2); // owner: <ANONYMOUS> (correct)

*/

///////////////////////////////////////
// for-of Loop
/*

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// looping arrays with for of
for (const item of menu) console.log(item);

console.log('----- menu.entries() -----');

// item = array of index of current item index and item itself
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

console.log('----- Destructered for-of -----');

// Destructuring array of menu.entries() to idx = index, el = element (same as above, just better)
for (const [idx, el] of menu.entries()) {
  console.log(`${idx + 1}: ${el}`);
}

*/

///////////////////////////////////////
// Enhanced Object Literals
/*

// we can now compute object property names
const weekdays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const facilityHours = {
  [weekdays[0]]: {
    open: 12,
    close: 22,
  },
  [weekdays[2]]: {
    open: 11,
    close: 22,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
  //we can also put expressions
  [`day-${4 - 2}`]: {
    open: 0,
    close: 0,
  },
};
console.log(facilityHours);

// we can have nested objects by just defining them by its object name while defining them separately
const accomplishments = {
  degrees: ['Associate of Science', 'Bachelor of Science'],
  certifications: ['IT certifcation by Google'],
};

const me = {
  firstName: 'Emmanuel',
  lastName: 'Castillo',
  dob: '07/24/1997',
  occupation: 'developer',
  // ES6 Enhanced Object Literal (just use the SAME name as object defined previously)
  accomplishments,

  greet: function () {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}!`);
  },

  // ES6 Enhanced Object Literal (dont need to define property and use function word, just define function name itself)
  greetES6() {
    console.log(`Hello ES6 my name is ${this.firstName} ${this.lastName}!`);
  },
};

const { degrees, certifications: certs } = me.accomplishments;
console.log(...degrees, ...certs);
me.greet();
me.greetES6();

*/

///////////////////////////////////////
// Optional Chaining (?.)
/*

// try to get Monday openingHours for restaurant object
// console.log(restaurant.openingHours.mon); //undefined, beacuse it does not exist
// console.log(restaurant.openingHours.mon.open); //Error there is no 'open' since there is no 'mon' either

// check if property exist then log them (work-around) can get really messy and unreadable
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// Solution: Optional Chaining (only if property before '?' then the property after will be read)

console.log(restaurant.openingHours.mon?.open); //only if 'mon' exists then 'open' will be read, if not undefined will return
console.log(restaurant.openingHours.fri?.open); //'fri' does exist, so 'open' gets read

// we can have multiple optional chaining (same as 'if statement' above)
console.log(restaurant.openingHours?.mon?.open); // if openingHours exist then read mon, if mon exists read open

// Example
const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // ?? sets default value if .open is undefined
  //we use ?? (nullish) instead of || beacuse sat opens at 0 and it would return undefined; 0 = falsy value
  console.log(`On ${day}, we open at ${open}.`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist.'); //checks to see if order method exists first
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist.');

// Arrays
const users = [
  {
    name: 'Emmanuel',
    email: 'hello@emmanuel.io',
  },
];

console.log(users[0]?.name ?? 'Users array empty');
*/

///////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries
/*

// Property NAMES
const properties = Object.keys(restaurant.openingHours);
console.log('Properties', properties); // array containing openingHours property names ['thu', 'fri', 'sat']

let openStr = `We are open ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day} `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(restaurant.openingHours);
console.log('Values', values); // array containing openingHours values (they are objects) [{...}, {...}, {...}]

// Entries (entire object)
const entries = Object.entries(restaurant.openingHours);
console.log('Entries', entries); // array containing entire obj [[key, {value}], ... , [key, {value}]] (value is an object in this case)

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}
*/

///////////////////////////////////////
// Sets (collection of UNIQUE values)
/*

// Sets are iterables, but elements are unique (no duplicates), and order of elements is irrelevant
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); // {'Pasta', 'Pizza', 'Risotto'}
console.log(ordersSet.size); // 3

console.log(ordersSet.has('Pizza')); // has method returns true
console.log(ordersSet.has('Bread')); // has method returns false

ordersSet.add('Garlic Bread'); // add new element
ordersSet.add('Garlic Bread'); // duplicate so does not add

ordersSet.delete('Risotto'); // remove element

console.log(ordersSet); // {'Pasta', 'Pizza', 'Garlic Bread'}

// ordersSet.clear(); //clears entire set

// Strings are iterable too
console.log(new Set('Jonas')); // {'J', 'o', 'n', 'a', 's'}

for (const order of ordersSet) console.log(order); // iterate through set

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // spread the unique set and store in array
console.log(staffUnique); // so, staffUnique becomes a unique array of staff

// counting how many different letters are in a string
console.log(new Set('emmanuel').size); // 6 uniqe letters
console.log(new Set('Emmanuel').size); // 7 uniqe letters ('E' != 'e')
*/
