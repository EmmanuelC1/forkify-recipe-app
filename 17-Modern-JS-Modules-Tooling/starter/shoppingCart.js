// Exporting Module
console.log('Exporting Module');

// Blocking Code
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finished fetching users');

const shippingCost = 10;
export const cart = [];

// export have to be top-level code (code not in if blocks or var in functions)
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

// Multiple Named Exports
export { totalPrice, totalQuantity as tq };

// Default Exports - exporting no name values
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
