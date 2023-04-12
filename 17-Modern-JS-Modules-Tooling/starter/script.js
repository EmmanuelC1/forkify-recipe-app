// 'use strict'; // All modules are executed in strict mode by default (no need to add it)

////////////////////////////////////////////
// Exporting and Importing in ES6 Modules
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
