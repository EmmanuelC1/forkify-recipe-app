// 'use strict'; // All modules are executed in strict mode by default (no need to add it)

////////////////////////////////////////////
// Exporting and Importing in ES6 Modules
/*
console.log('Importing Module');

// Importing Module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// // console.log(shippingCost); // Error: not defined (we need to export first)

// addToCart('bread', 5);
// console.log(price, tq); // price was imported as a new variable name

// Import everything as an 'object' (creates a namespace)
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// Default Import - no {}, named uses {}
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

// showing live connection with cart array changing values (we originally exported an empty array)
console.log(cart);
*/

////////////////////////////////////////////
// Top-Level Await (ES2022)

// We can use await outside async function (only in modules), however it blocks top-level code execution
// console.log('Start fetching');

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// console.log('This code will run after both top-level awaits');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  //   console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

// async functions always return a Promise, so it is not the lastPost we are expecting
const lastPost = getLastPost();
// console.log(lastPost); // Promise {<pending>}

// One work-around the Promise (not very clean)
// lastPost.then(res => console.log(res));

// Using top-level await (cleaner solution)
const lastPost2 = await getLastPost();
console.log(lastPost2);

// Implication w/ top-level await (importing a module that has top-level await in it)
// top-level await in shoppingCart.js will block any code in script.js from execution until await is fulfilled
import * as ShoppingCart from './shoppingCart.js';
