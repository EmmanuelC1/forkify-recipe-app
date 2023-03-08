'use strict';

///////////////////////////////////////
// Coding Challenge #1

/* 
    Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data 
        into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. 
        A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

    Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

    1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy 
        of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
    2. Create an array with both Julia's (corrected) and Kate's data
    3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy 
        ("Dog number 2 is still a puppy 🐶")
    4. Run the function for both test datasets

    TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
    TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/
/*
const checkDogs = function (dogsJulia, dogsKate) {
  // Task 1:
  const dogsJuliaCorrected = dogsJulia.slice(1, -2);
  // Task 2:
  // const allDogAges = [...dogsJuliaCorrected, ...dogsKate]; // using spread operator
  const allDogAges = dogsJuliaCorrected.concat(dogsKate);
  console.log(allDogAges);

  // Task 3:
  allDogAges.forEach(function (age, i) {
    const adultPup =
      age >= 3 ? `an adult, and is ${age} years old.` : 'still a puppy 🐶';
    console.log(`Dog number ${i + 1} is ${adultPup}`);
  });
};
const dataJulia = [3, 5, 2, 12, 7];
const dataKate = [4, 1, 15, 8, 3];

const dataJulia2 = [9, 16, 6, 8, 3];
const dataKate2 = [10, 5, 6, 1, 4];

checkDogs(dataJulia, dataKate);
checkDogs(dataJulia2, dataKate2);
*/

///////////////////////////////////////
// Coding Challenge #2
/*
  Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the 
    average age of the dogs in their study. 

  Your tasks: 
  Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order: 

  1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. 
    If the dog is > 2 years old, humanAge = 16 + dogAge * 4 
  2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old) 
  3. Calculate the average human age of all adult dogs 
  4. Run the function for both test datasets 

  Test data: 
  • Data 1: [5, 2, 4, 1, 15, 8, 3] 
  • Data 2: [16, 6, 10, 5, 6, 1, 4] 
*/
/*
const calcAverageHumanAge = function (ages) {
  // Task 1:
  const dogToHumanAge = ages.map(
    age => (age = age <= 2 ? 2 * age : 16 + age * 4)
  );
  console.log('dogToHumanAges:', dogToHumanAge);

  // Task 2:
  const adultAgesFiltered = dogToHumanAge.filter(humanAge => humanAge >= 18);
  console.log('adultAgesFiltered:', adultAgesFiltered);

  // Task 3:
  const avgAdultAge = adultAgesFiltered.reduce((acc, age) => acc + age, 0) / adultAgesFiltered.length; //prettier-ignore
  console.log('avgAdultAge:', avgAdultAge);
};

const data1 = [5, 2, 4, 1, 15, 8, 3];
console.log('Test Data 1:', data1);
calcAverageHumanAge(data1);

console.log('-------------------');

const data2 = [16, 6, 10, 5, 6, 1, 4];
console.log('Test Data 2:', data2);
calcAverageHumanAge(data2);
*/

///////////////////////////////////////
// Coding Challenge #3
/*
  Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!

  Test data: 
  • Data 1: [5, 2, 4, 1, 15, 8, 3] 
  • Data 2: [16, 6, 10, 5, 6, 1, 4] 
*/
/*
const calcAverageHumanAgeChained = ages => {
  const avgAdultAge = ages
    .map(age => (age = age <= 2 ? 2 * age : 16 + age * 4)) // convert dog ages to human ages
    .filter(adultAge => adultAge >= 18) // filter only adult dogs
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0); // calc avg between all adult dogs

  console.log('avgAdultAge Chained Arrow Function:', avgAdultAge);
};

console.log('------- Chained Arrow Function -------');
// const data1 = [5, 2, 4, 1, 15, 8, 3];
calcAverageHumanAgeChained(data1);
// const data2 = [16, 6, 10, 5, 6, 1, 4];
calcAverageHumanAgeChained(data2);
*/

///////////////////////////////////////
// Coding Challenge #4
/*
  Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little. Eating too much
    means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite. Eating an 
    okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion. 
    Basically, the current portion should be between 90% and 110% of the recommended portion.

  Your tasks: 
  1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the 
    object as a new property. Do not create a new array, simply loop over the array. 
    Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg) 

  2. Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you 
    first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓 

  3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat 
    too little ('ownersEatTooLittle'). 

  4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah 
    and John and Michael's dogs eat too little!" 

  5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false) 

  6. Log to the console whether there is any dog eating an okay amount of food (just true or false) 

  7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.) 

  8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the 
    portions are inside the array's objects 😉)
*/
/*
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Task 1:
dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);

// Task 2:
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `${dogSarah.owners.join(' and ')}'s dog eats too ${
    dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'
  }!`
);

// Task 3:
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

console.log('ownersEatTooMuch', ownersEatTooMuch);
console.log('ownersEatTooLittle', ownersEatTooLittle);

// Helper function for task 4, that logs whether a dog eats too much or too little
const ownersLogger = function (owners, isEatingTooMuch) {
  console.log(
    `${owners.join(' and ')}'s dogs eat too ${
      isEatingTooMuch ? 'much' : 'little'
    }!`
  );
};

// Task 4:
ownersLogger(ownersEatTooMuch, true);
ownersLogger(ownersEatTooLittle, false);

// Task 5:
const exactAmount = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log('Any dogs eating exactly the amount of food recommended?', exactAmount); //prettier-ignore

// Helper function for task 6 & 7, calculates if dog is eating an okay amount of food, return true/false
const calcOkayAmount = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

// Task 6:
const okayAmount = dogs.some(calcOkayAmount);
console.log('Any dogs eating an okay amount of food?', okayAmount);

// Task 7:
const okayAmountDogs = dogs.filter(calcOkayAmount);
console.log('Dogs eating okay amount of food:', okayAmountDogs);

// Task 8:
const dogsAscendingByRecFood = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log('Recommended Food in Ascending Order:', dogsAscendingByRecFood);
*/
