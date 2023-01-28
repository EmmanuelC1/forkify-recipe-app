//Lecture: VALUES AND VARIABLES
// /*
const country = 'United States of America';
const continent = 'North America';
let population = 331.9; //in Millions

console.log('Country:', country)
console.log('Continent:', continent);
console.log(`Population: ${population}M`);
// */

//Lecture: DATA TYPES
// /*
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
// */

//Lecture: LET, CONST, AND VAR
// /*
language = 'English';
console.log(language);
// */

//Lecture: BASIC OPERATORS
// /*
console.log(population / 2);
population++;
console.log(population > 6);
console.log(population < 33);
const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description);
// */

//Lecture: STRINGS AND TEMPLATE LITERALS
// /*
const newDescription = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(newDescription);
// */

//Lecture: IF/ELSE STATEMENTS
// /*
if(population > 33) {
    console.log(`${country} population is above the average.`);
} else {
    console.log(`${country}'s population is ${33-population} below the average.`);
}
// */

//Lecture: TYPE CONVERSIONS AND COERCION
// /*
console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //'617'
console.log('19' - '13' + 17); //23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143
// */

//Lecture: EQUALITY OPERATORS: == VS ===
// /*
const numNeighbors = Number(prompt('How many neighbor countries does your country have?'));

if(numNeighbors === 1) console.log('Only one border!');
else if(numNeighbors > 1) console.log('More than 1 border');
else console.log('No borders');
// */

//Lecture: LOGICAL OPERATORS
// /*
if(language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country}.`);
} else {
    console.log(`${country} does not meet your criteria.`);
}
// */

//Lecture: SWITCH STATEMENTS
// /*
switch(language) {
    case 'Chinese':
    case 'Mandarin':
        console.log('MOST number of native speakers.');
        break;
    case 'Spanish':
        console.log('2nd place in number of native speakers.');
        break;
    case 'English':
        console.log('3rd place.');
        break;
    case 'Hindi':
        console.log('Number 4.');
        break;
    case 'Arabic':
        console.log('5th most spoken language.');
        break;
    default:
        console.log('Great language too.');
}
// */

//Lecture: CONDITIONAL (TERNARY) OPERATOR
// /*
population > 33 ? console.log(`${country}'s population is above average.`) : console.log(`${country}'s population is below average.`);

//Another solution with less repeated code (uses same string only changing one word):
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average.`);
// */