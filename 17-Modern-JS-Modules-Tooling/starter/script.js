// 'use strict'; // All modules are executed in strict mode by default (no need to add it)

////////////////////////////////////////////
// Exporting and Importing in ES6 Modules
// /*
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
// */

////////////////////////////////////////////
// Top-Level Await (ES2022)
/*
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
*/

////////////////////////////////////////////
// The Module Pattern
/*

// Old way of creating modules (encapsulating private data) using IFFE
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return { addToCart, cart, totalPrice, totalQuantity };
})();

ShoppingCart2.addToCart('apples', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); // undefined (private beacuse we did not return this value)
*/

////////////////////////////////////////////
// CommonJS Modules - used in Node.js
// in CommonJS, one file is one module; like ES6 modules
// not gonna work in broswer, only in node.js (export keyword would be an object in node.js)

/*
// Export
export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
};

// Import
const { addToCart } = require('./shoppingCart.js');
*/

////////////////////////////////////////////
// Introduction to NPM
/*
// Check version
npm -v

// Initialize npm - creates and configures package.json
npm init

// Install a library like Leaflet from previous project (check library documentation)
npm install leaflet     (can also use 'i' instead of 'install')

// Install Lodash (ES modules format)
npm i lodash-es

// When moving your project, you need to install all dependencies again since it's not a good idea to include the node_modules
  folder with your project either on git, or other version control. So running 'npm install' will install all required dependecies
  for your project to work as it should, given that the package.json file is correct

npm install 
npm i

*/
// /*
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

// Make clone of state object (not deep clone, any changes will change both)
const stateClone = Object.assign({}, state);

// using deepClone from Lodash
const stateDeepClone = cloneDeep(state);

// Change original object property
state.user.loggedIn = false;
console.log('stateClone', stateClone); // should be true, but changed to false
console.log('stateDeepClone', stateDeepClone); // stays true, as expected because its a deep clone
// */

////////////////////////////////////////////
// Bundling With Parcel and NPM Scripts
/*
// Install parcel using npm - devDependencies are tools we need to build application, but not a dependency we actually
  include in our code. (we use it to develop our project)

npm install parcel --save-dev

// Using npx to use parcel and bundle project in cli. Also starts new local server
  Creates dist (distribution) folder that will be the folder and code we send to production

npx parcel index.html

// Using NPM Scripts - add script to package.json (automates parcel command above): 
"start": "parcel index.html"

// Once that script is set, we run the following command in cli to run parcel command above
npm run start

// Another script in package.json, to bundle code –– when we are done developing and need FINAL bundle
"build": "parcel build index.html"

npm run build

*/

// Code only Parcel understands –– whenever we change one of the modules, it will trigger a rebuild and the new modified
// bundle will then automatically get injected into the browser without triggering a whole page reload
if (module.hot) {
  module.hot.accept();
}

////////////////////////////////////////////
// Configuring Babel and Polyfilling

// this code is not part of the Babel preset 'preset-env', these 'features' are not transpiled (they still work but
// are not converted into ES5 code) We would have to Polyfill them
class Person {
  #greeting = 'Hey';

  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const emmanuel = new Person('Emmanuel');

console.log('Emmanuel' ?? null);
console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(res => console.log(res));

// These following imports are usually at the top of the file.
// Importing library to use polyfilling
// import 'core-js/stable';

// only polyfill the find array method (reduces bundle file size) Usually not done like this but a possibility
import 'core-js/stable/array/find';
import 'core-js/stable/promise';

// Polyfilling async functions
import 'regenerator-runtime/runtime';
