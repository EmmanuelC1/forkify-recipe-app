'use strict';
//has to be the first statement in a file.
//makes it easier for developers to avpid accidental errors
//strict mode forbids us to do certain things. without it JS would fail without letting us know what caused it

///////////////////////////////////////
// Function Declarations vs. Expressions
/*

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

*/

///////////////////////////////////////
// Arrow Functions
/*

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

*/

///////////////////////////////////////
// Nested Functions
/*

const cutFruitPieces = (fruit) => fruit * 4;

function fruitProcessor (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

*/

///////////////////////////////////////
// Reviewing Functions
/*
    Function Declartions –– functions that can be used before its decalration
    Functions Expressions –– essentially a function value store in a variable
    Arrow Functions –– great for quick one-line functions. Has no 'this' keyword (more on this later...)
*/
/*
const calcAge =  function(birthyear) {
    return 2037 - birthyear;
}

const yearsUntilRetirement = function(birthyear, firstName) {
    const age = calcAge(birthyear);
    const retirementAge = 65 - age;

    if(retirementAge > 0) {
        return retirementAge;
    } else {
        return -1;
    }
    //return `${firstName} retires in ${retirementAge}.`;
}

console.log(yearsUntilRetirement(1997, 'Emmanuel'));
console.log(yearsUntilRetirement(1970, 'Mike'));

*/

///////////////////////////////////////
// Intro to Arrays
/*

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

const firstName = 'Emmanuel';
const emmanuel = [firstName, 'Castillo', 2023-1997, 'teacher', friends];
console.log(emmanuel);

*/

///////////////////////////////////////
// Basic Array Operation Methods
/*

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

*/
