'use strict';

////////////////////////////////////
// Simple Array Methods
/*

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE –– slice(start, end) – does NOT mutate 'arr', returns new array
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd'] end is not included
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(1, -1)); // ['b', 'c', 'd']

// we can create a shallow copy with slice() (no parameters)
console.log(arr.slice());
console.log([...arr]); // same as above but with spread operator, slice can be used if you want to chain other methods

// SPLICE –– splice(start, deleteCount) - mutates original 'arr', returns array
// console.log(arr.splice(2)); // ['c', 'd', 'e'] <- removed
console.log(arr.splice(-1)); // ['e'] <- removes the last element
console.log(arr); // ['a', 'b', 'c', 'd'] the rest was taken out with splice
console.log(arr.splice(1, 2)); // ['b', 'c'] <- removed
console.log(arr); // ['a', 'd']

// REVERSE –– reverse() - mutates the original array
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
console.log(arr2); // ['f', 'g', 'h', 'i', 'j']

// CONCAT –– concat(arr2) - does NOT mutate original arr, returns new array
arr = ['a', 'b', 'c', 'd', 'e'];
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// another way is using spread operator
console.log([...arr, ...arr2]);

// JOIN –– join(separatorString) - does NOT mutate original arr, returns string
console.log(letters.join(' - ')); // 'a - b - c - d - e - f - g - h - i - j'
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// Methods we already learned
const arr3 = [];

// PUSH –– push(newElement) - mutates arr (appends new element), returns new length of arr
console.log(arr3.push(2)); // 1
console.log(arr3); // [2]

// UNSHIFT –– unshft(newElement) - mutates array (appends new element at the BEGINNINIG), returns new length
console.log(arr3.unshift(1)); // 2
console.log(arr3); // [1, 2]

// POP –– pop() - mutates array (removes LAST element of array), returns element removed
console.log(arr3.pop()); // 2
console.log(arr3); // [1]

// SHIFT –– mutates array (removes FIRST element of array), returns element removed
console.log(arr3.shift()); // 1
console.log(arr3); // []

// INCLUDES –– indexOf(searchElement) - does NOT mutate array (checks if searchElement is in arr), returns index of that element,
// returns -1 if not found
arr3.push(...arr); // ['a', 'b', 'c', 'd', 'e']
console.log(arr3.indexOf('a')); // 0
console.log(arr3.indexOf('f')); // -1
*/

////////////////////////////////////
// AT Method
/*

const arr4 = [23, 11, 64];
console.log(arr4[0]); // 23
console.log(arr4.at(0)); // 23

// get last element of arr
console.log(arr4[arr4.length - 1]); // 64
console.log(arr4.slice(-1)[0]); // 64 , we made a copy of arr using slice (only last element), then indexed at pos 0 ([0])
console.log(arr4.at(-1)); // 64 , return last element
console.log(arr4.at(-2)); // 11 , return second to last element

// AT method also works on strings
console.log('emmanuel'.at(0)); // 'e'
console.log('emmanuel'.at(-1)); // 'l'
*/

////////////////////////////////////
// ForEach Method: Looping Arrays
/*

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('------- for of -------');

// using for of loop
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    // remove negative sign, with absolute value
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('------- forEach -------');

// using forEach method, uses callback function(value, index, array), can use arrow function too
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    // remove negative sign, with absolute value
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// You CANNOT use 'break', 'continue' statements in forEach loop. for of does
*/

////////////////////////////////////
// ForEach with Maps and Sets
/*

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

currenciesUnique.forEach(function (value, _, set) {
  //Sets do NOT have keys or index, so the second parameter is not needed. (we can use '_')
  // in JS common practice '_' is considered a 'throwaway' variable
  console.log(`${value}`);
});
*/

////////////////////////////////////
// Data Transformations: Map, Filter, Reduce
/*
  In JavaScript, there are 3 big important array methods that we use all the time to perform Data Transformation.
    These are methods that we use  to create new arrays based on trandsforming data from other arrays.

  • Map
    - Map returns a NEW array containing the results of applying an operation on all original array elements.
      - Ex. map methods takes an array, loops over that array, and in each iteration it applies a callback function that we 
        specify in our code to the current array element. So in this example, suppose the callback multiplies each array
        element by 2 and puts it into a NEW array. We say that it 'maps' the values of the original array to a new array
        and that's why this method is called map.

  • Filter
    - Filter returns a NEW array containing the array elements that passed a specified test condition.  
      - Ex. In this example, we only want array elements greater than 2 in the givedn array. The filter method will then 
        loop through each element and check if the condition is satisfied (current > 2). If it is, it will get added to the
        NEW array, otherwise it will ignore the elements that aren't greater than 2. Returns the new filtered array.

  • Reduce
    - Reduce boils (reduces) all array elements down to one single value. 
      - Ex. Adding all elements together. The reduce method will loop through all array elements and add each element to
        an accumulator variable that will keep track of the sum between all elements in the given array. The reduced value,
        the accumulator variable, will be returned. We say, that the array was reduced to this one single value.
*/

////////////////////////////////////
// Map Method
/*
//FIXME remove to avoid re-initialization
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1; // Euro to USD conversion

// using modern Functional Programming Paradigm (using callbacks, this case arrow function, but can be function decl as below)
const movementsUSD = movements.map(mov => mov * euroToUsd);

// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUsd;
// });

console.log('Movements:', movements);
console.log('MovementsUSD:', movementsUSD); // new array of movements converted from Euros to USD

// Doing the same as above but using for of loop (diff paradigm, manually creating new array and updating through loop)
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUsd);
}
console.log('MovementsUSD using for loop:', movementsUSDfor);

const movementDescriptions = movements.map((mov, i) => {
  const transType = mov > 0 ? 'deposited' : 'withdrew';
  // remember to return instead of console.log since it is creating and adding to new array at each iteration
  return `Movement ${i + 1}: You ${transType} ${Math.abs(mov)}`;
});
console.log('Movement Descriptions:', movementDescriptions);
*/

////////////////////////////////////
// Filter Method
/*
//FIXME remove to avoid re-initialization
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// using modern Functional Programming Paradigm (using callbacks, this case arrow function, but can be function decl as below)
const deposits = movements.filter(mov => mov > 0);

// const deposits = movements.filter(function (mov) {
//   if (mov > 0) return mov;
// });

// Doing the same as above but using for of loop (diff paradigm, manually creating new array and updating through loop)
const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) depositsFor.push(mov);
}

// Filter all the withdrawals from movements
const withdrawals = movements.filter(mov => mov < 0);

console.log('Deposits:', deposits);
console.log('Deposits using for loop:', depositsFor);
console.log('Withdrawals:', withdrawals);
*/

////////////////////////////////////
// Reduce Method
/*
//FIXME remove to avoid re-initialization
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// First parameter in Reduce method is accumulator, then current element, index, and last is array itself
const balance = movements.reduce(function (sum, curr, i) {
  console.log(`Iterations ${i}: Sum = ${sum}`);
  return sum + curr; // add all elements to sum and store sum in 'balance' in the end
}, 0); // initial value of 'sum' (accumulator)

// Arrow Function
// const balance = movements.reduce((sum, curr) => sum + curr, 0); // 0 = initial sum value

console.log('Balance:', balance); // 3840 sum of all movements array

// for loop example (same as above)
let balanceFor = 0;
for (const mov of movements) {
  balanceFor += mov;
}
console.log('Balance using for loop:', balanceFor);
*/
