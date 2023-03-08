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

// Reduce to MAX Value:
const maxValue = movements.reduce(
  (acc, curr) => (acc = curr > acc ? curr : acc),
  movements[0] // set initial value of 'acc' to first element
);
console.log('Max Value:', maxValue);
*/

////////////////////////////////////
// Chaining Methods (Map, Filter, and Reduce)
/*
//FIXME remove to avoid re-initialization
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

// get the total (sum) of deposits of all movements in USD (we can keep chaining methods as long as method returns new array)
const totalDepositsUSD = movements
  .filter(mov => mov > 0) // filter all deposits
  .map(mov => mov * euroToUsd) // convert to USD
  .reduce((acc, mov) => acc + mov, 0); // calc total

console.log('totalDepositsUSD:', totalDepositsUSD);
*/

////////////////////////////////////
// Find Method
/*
//FIXME remove to avoid re-initialization
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Find method will return first element found that satisfies condition, otherwise returns undefined
const firstWithdrawal = movements.find(mov => mov < 0);
console.log('firstWithdrawal:', firstWithdrawal);

const acct1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const acct2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const acct3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const acct4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accts = [acct1, acct2, acct3, acct4];

const account = accts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// for of version of find method
let accountFor = {};
for (const acct of accts) {
  if (acct.owner === 'Jessica Davis') accountFor = acct;
}
console.log(accountFor);
*/

////////////////////////////////////
// Some & Every Method
/*
//FIXME remove to avoid re-initialization
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('Movements:', movements);
console.log('includes(-130):', movements.includes(-130)); // true

// 'includes' only test EQUALITIES, but 'some' and 'every' can test for CONDITIONS

// SOME: CONDITION (if there is ANY deposit)
const anyDeposits = movements.some(mov => mov > 0);
console.log('anyDeposits (using some)', anyDeposits); // true

// EVERY: CONDITION (if all movements are ALL deposits)
const allDeposits = movements.every(mov => mov > 0);
console.log('allDeposits in Movements (using every)', allDeposits); // false

const movements2 = [430, 1000, 700, 50, 90];
const allDeposits2 = movements2.every(mov => mov > 0);
console.log('Movments2:', movements2);
console.log('allDeposits2 in Movements2 (using every)', allDeposits2); // true

// Separate Callbacks
const deposit = mov => mov > 0;

// We can just call the new 'deposit' arrow function inside the array methods
console.log('Separate callback for deposits (some):', movements.some(deposit));
console.log('Separate callback for deposits (every)', movements.every(deposit));
console.log('Separate callback for deposits (filter)',movements.filter(deposit)); //prettier-ignore
*/

////////////////////////////////////
// Flat & Flat Map Methods (ES2019)
/*
// Flat Method – does NOT mutate, returns new array
const exampleArr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(exampleArr.flat()); // remove nested array, and put everything in one array

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // Only flattens one level deep (one level of nesting)
console.log(arrDeep.flat(2)); // Goes 2 levels deep in nesting, so we get the result we want

const accountsMovements = accts.map(acc => acc.movements);
console.log(accountsMovements); // [[acct1.movements], [acct2.movements], ...]

const allMovements = accountsMovements.flat();
console.log(allMovements); // array with all movements (no nesting)

const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance); // 17840; calculates overall balance between all accounts

// Chaining Methods
const overallBalanceChained = accts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalanceChained);

// Flat Map – only goes 1 level deep! if we need more, we need to use flat method
// Combines flat() and map() into one, provides better performance than using them separately
const overallBalanceFlatMap = accts
  .flatMap(acc => acc.movements) // uses map callback, since flat doesn't need one
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalanceFlatMap);
*/

////////////////////////////////////
// Sort (JS built-in sorting method)
/*
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners); // starting arr
console.log(owners.sort()); // Sorts alphabetically
console.log(owners); // Mutates original arr

// Numbers
//FIXME remove to avoid re-initialization
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// Does NOT work, beacuse 'sort()' turns everything into strings, and sorts the strings, not numbers
console.log(movements.sort());

// Solution (if callback returns a negative value, a will be sorted before b. Otherwise, returning positive value sorts b before a)
// return < 0; (A, B) -> keep order
// return > 0; (B, A) -> switch order

// Ascending
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
// Simplified version
// movements.sort((a, b) => a - b); // returns positive value, if a > b (a-b will always be +). returns negative value, if a < b (a - b will always be -)
console.log(movements); // Sorted ascending order

// Descending
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
// Simplified version
// movements.sort((a, b) => b - a); // returning positive value, if b > a (b-a will always be +). returns negative value, if b < a (b - a will always be -)
console.log(movements); // Sorted descending order
*/

////////////////////////////////////
// More Ways of Creating and Filling Arrays
/*
// Fill method + Empty arrays
const x = new Array(7);
console.log(x); // empty array with size of 7
// x.fill(1); // fills array with all 1
// x.fill(1, 3); // fills array with 1 starting at index 3
x.fill(1, 3, 5); // fills array with 1 starting at index 3, ending at index 4 (5 not inclusive)
console.log(x);

const fillArr = [1, 2, 3, 4, 5, 6, 7];
fillArr.fill(23, 2, 6); // fills 23 into array at position 2 - 5 (6 not included)
console.log(fillArr);

// Array.from - not a normal array method. Method usues the Array() constructor
const y = Array.from({ length: 7 }, () => 1);
console.log(y); // array with length 7, all elements are set to 1

const z = Array.from({ length: 7 }, (_, i) => i + 1); // used _ as parameter to denote a NOT used parameter
console.log(z); // array with length 7, elements are set to 1-7

// convert Movement Values from Bankist UI to array using Array.from()
// querySelectorAll returns a nodeList of all these elements –– so we are converting this nodeList to an Array using Array.from()
// getting all movements from user once we click on the balance label, otherwise there is no movements displayed
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'), // gets nodeList of all movements from user
    el => Number(el.textContent.replace('€', '')) // gets rid of euro sign at each element
  );
  console.log(movementsUI);

  // Another conversion solution
  const movementsUI2 = [...document.querySelectorAll('.movements__value')].map(
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI2);
});
*/

////////////////////////////////////
// Which Array Method to Use
/*
  What do you want from the array method?

    • To mutate original array?
      –– Add to original array
        .push()     –– end
        .unshift()  –– start
      –– Remove from original array
        .pop()      –– end
        .shift()    –– start
        .splice()   –– any
      –– Others
        .reverse()
        .sort()
        .fill()

    • A new array?
      –– Computed from original
        .map()      –– loop
      –– Filtered using condition
        .filter()
      –– Portion of original
        .slice()
      –– Adding original to other
        .concat()
      –– Flatten the orignal (nested array into one)
        .flat()
        .flatMap()

    • An array index?
      –– Based on value
        .indexOf()
      –– Based on test condition
        .findIndex()

    • Retrieve an entire array element?
      –– Based on test condition
        .find()

    • Know if array includes a certain element? (returns true/false)
      –– Based on value
        .includes()
      –– Based on test condtion
        .some()
        .every()

    • Get a new string? 
      –– Based on separator string (returns string with separator, does not mutate arr)
        .join()

    • Transform array to a new value?
      –– Based on accumulator
        .reduce()

    • Simply just loop the array?
      –– Based on callback (no new arr)
        .forEach()
*/
