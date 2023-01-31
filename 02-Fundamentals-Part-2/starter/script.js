'use strict';
//has to be the first statement in a file.
//makes it easier for developers to avpid accidental errors
//strict mode forbids us to do certain things. without it JS would fail without letting us know what caused it

///////////////////////////////////////
// Function Declarations vs. Expressions
// /*

//we can call a Funciton Declaration before defining it. We CANNOT do this for Function Expressions
const age1 =calcAge1(1997);

//Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

//Function Expression –– anonymous function, expressions produce values. (being stored in variable 'calcAge2')
const calAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calAge2(1997);
console.log(age1, age2);

// */

///////////////////////////////////////
// Arrow Functions
// /*

//variable to store arrow func = parameters => return;
const calcAge3 = birthYear => 2037 - birthYear;
console.log(calcAge3(1997));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirementAge = 65 - age;
    return `${firstName} retires in ${retirementAge}.`;
}

console.log(yearsUntilRetirement(1997, 'Emmanuel'));
console.log(yearsUntilRetirement(1980, 'Jonas'));

// */

///////////////////////////////////////
// Nested Functions
// /*

const cutFruitPieces = (fruit) => fruit * 4;

function fruitProcessor (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

// */

///////////////////////////////////////
// Reviewing Functions
/*
    Function Declartions –– functions that can be used before its decalration
    Functions Expressions –– essentially a function value store in a variable
    Arrow Functions –– great for quick one-line functions. Has no 'this' keyword (more on this later...)
*/
// /*
const calcAge =  function(birthyear) {
    return 2037 - birthyear;
}

const yearsUntilRetirement2 = function(birthyear, firstName) {
    const age = calcAge(birthyear);
    const retirementAge = 65 - age;

    if(retirementAge > 0) {
        return retirementAge;
    } else {
        return -1;
    }
    //return `${firstName} retires in ${retirementAge}.`;
}

console.log(yearsUntilRetirement2(1997, 'Emmanuel'));
console.log(yearsUntilRetirement2(1970, 'Mike'));

// */

///////////////////////////////////////
// Intro to Arrays
// /*

const dubsChipYears = new Array(2015, 2017, 2018, 2022);

//Literal syntax
const friends = ['Michael', 'Steven', 'Peter'];

console.log(friends); //log full array
console.log(friends[0], friends[2]); //index array
console.log(friends.length); //log size of array (length = property)
console.log(friends[friends.length-1]); //log last element in array

//Mutate the array (Arrays are not primitive values, so 'const friends' can be changed).
friends[2] = 'Jay';
console.log(friends);

//friends = ['Bob', 'Alice']; // CANNOT change the whole array –– TypeError: assignment to constant variable

const nameFirst = 'Emmanuel';
const manny = [nameFirst, 'Castillo', 2023-1997, 'teacher', friends];
console.log(manny);

// */

///////////////////////////////////////
// Basic Array Operation Methods
// /*

//Append at the END of array
const team = ['Mike', 'Steve', 'Scottie'];
const newLength = team.push('Dennis'); //push method returns the new length of the array
console.log(team, newLength);

//Append at the BEGINNING of array
team.unshift('Phil'); 
console.log(team);

//Remove Elements
team.pop() //removes LAST element
const popped = team.pop() //pop methods returns value of the removed element
console.log(team, popped);

team.shift(); //remove FIRST element, also returns value of the removed element
console.log(team);

//Get index of a value in an array
console.log(team.indexOf('Steve')); //1
console.log(team.indexOf('Bob')); //-1

//Check if array includes a value (ES6 method) Uses Strict Equality
console.log(team.includes('Steve')); //true
console.log(team.includes('Bob')); //false
team.push(23);
console.log(team.includes('23')); //false

if(team.includes('Scottie')) {
    console.log('Scottie is on your team.');
} else {
    console.log('Scottie is not on the team');
}

// */

///////////////////////////////////////
// Intro to Objects
// /*

//Literal Syntax
const emmanuel = {
    firstName: 'Emmanuel', //each of these are called properties
    lastName: 'Castillo',
    age: 2023 - 1997,
    job: 'Teacher',
    hobbies: ['gaming', 'coding', 'basketball']
}; //order of these properties do not matter when retriving them... unlike arrays
console.log(emmanuel);

//We should:
// use ARRAYS –– for more ordered data
// use OBJECTS –– for more unstructured data, and data that we want to name and retrieve based on that name

// Dot vs Bracket Notation
console.log(emmanuel.lastName); //Dot Notation –– can only use property names. If it doesn't exist returns undefined
console.log(emmanuel['lastNameee']); //Bracket Notation –– we can put any expression. If it doesn't exist, returns undefined

//Using expressions in Bracket Notation
const nameKey = 'Name';
console.log(emmanuel['first' + nameKey]);
console.log(emmanuel['last' + nameKey]);

// const interestedIn = prompt('Wat do you want to know Emmanuel? Choose between firstName, lastName, age, job, and hobbies.');
// if (emmanuel[interestedIn]) {
//     console.log(emmanuel[interestedIn]);
// } else { //interestedIn returns undefined
//     console.log('Wrong request! Choose between the explicit values.');
// }

//Adding new properties using both Dot and Bracket Notation
emmanuel.location = 'California';
emmanuel['favoriteTeam'] = 'Golden State Warriors';
console.log(emmanuel);

//Quick Challenge
//Write 'Emmanuel has 3 hobbies, but his favorite is gaming.' w/o hard coding values and only using the object
console.log(`${emmanuel.firstName} has ${emmanuel.hobbies.length} hobbies, but his favorite is ${emmanuel.hobbies[0]}.`);

// */

///////////////////////////////////////
// Object Methods
// /*

const castillo = {
    //Properties
    firstName: 'Emmanuel',
    lastName: 'Castillo',
    birthYear: 1997,
    job: 'teacher',
    hobbies: ['gaming', 'coding', 'basketball'],
    hasDriversLicense: true,

    //Methods –– methods can also be considered properties but it just happens to holds a function value
    // calcAge: function(birthYear) {
    //     return 2023 - birthYear;
    // }

    //new version of same method above
    // calcAge: function() { 
    //     return 2023 - this.birthYear; //'this' is equal to the object on which the method is called.
    // }

    //even newer version of the method above
    calcAge: function() {
        this.age = 2023 - this.birthYear; //creates a property 'age' and stores it in the object
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};

// console.log(castillo.calcAge(castillo.birthYear)); //Dot Notation
// console.log(castillo['calcAge'](castillo['birthYear'])); //Bracket Notation

//Using 'this'
console.log(castillo.calcAge()); //the object calling the method 'calcAge()' is 'castillo' so 'this' refers to 'castillo'
console.log(castillo.age); //retrieved age from the newely created 'age' property after calling 'calcAge()'
console.log(castillo.getSummary());

// */

///////////////////////////////////////
// For Loop
// Looping Arrays, Breaking, and Continuing
// /*

const myArray = [
    'Emmanuel', 
    'Castillo', 
    2023-1997, 
    'teacher', 
    ['Michael', 'Peter', 'Steven']
];

const types = []

for(let i = 0; i < myArray.length; i++) {
    // only print string elements
    if(typeof myArray[i] !== 'string') continue; 

    // Reading from 'myArray'
    console.log(myArray[i]);

    // Filling the 'types' array
    types.push(typeof myArray[i]); // 'types' stores the type of each element in 'myArray'
}
console.log(types);

for(let i = 0; i < myArray.length; i++) {
    //break after 'myArray' reaches a number
    if(typeof myArray[i] === 'number') break;
    console.log(myArray[i]);
}

// */

///////////////////////////////////////
// Looping Backwards & Nested Loops
// /*

// Looping Backwards
for(let i = myArray.length - 1; i >= 0; i--) {
    console.log(i, myArray[i]);
}

// Nested Loops
for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`----Staring exercise ${exercise}----`);
    for(let rep = 1; rep < 4; rep++) {
        console.log(`Lifting rep ${rep} 🏋🏻‍♂️`);
    }
}
// */

///////////////////////////////////////
// While Loops
// /*

let counter = 1;
while(counter <= 3) {
    console.log(`We are looooooping! ${counter}`);
    counter++;
}

let dice = Math.trunc(Math.random() * 6) + 1; //random number from 1 - 6

while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1; //random number from 1 - 6

    if(dice === 6) console.log(`You rolled a ${dice} and loop is completed.`)
}
// */