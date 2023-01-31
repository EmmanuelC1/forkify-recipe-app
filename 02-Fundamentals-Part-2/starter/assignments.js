'use strict';

//Lecture: FUNCTIONS
const describeCountry = (country, population, capitalCity) => {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`
};

const usa = describeCountry('United State of America', 331.9, 'Washington, DC');
const mexico = describeCountry('Mexico', 126.7, 'Mexico City');
const argentina = describeCountry('Argentina', 45.81, 'Buenos Aires');

console.log(usa);
console.log(mexico);
console.log(argentina);

//Lecture: FUNCTION DECLARATIONS vs EXPRESSION
// function DECLARATION returns the percentage of the world the given population represents. 
function percentageOfWorld1(population) {
    return ((population / 7900) * 100).toFixed(2); //only return 2 decimal points
}

//function EXPRESSION that does the same as the function above.
const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
}

//Lecture: ARROW FUNCTIONS
// arrow function that does the same as functions above.
const percentageOfWorld3 = population => (population / 7900) * 100;

//change the function call to use either of the 3 functions above.
const popUsa = percentageOfWorld3(331.9);
const popMexico = percentageOfWorld3(126.7);
const popArgentina = percentageOfWorld3(45.81);

console.log(popUsa, popMexico, popArgentina);

//Lecture: NESTED FUNCTIONS
const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    console.log(`${country} has ${population} million people, which is about ${percentage}% of the world.`);
}

const descPopUsa = describePopulation('USA', 331.9);
const descPopMexico = describePopulation('Mexico', 126.7);
const descPopArgentina = describePopulation('Argentina', 45.81);

//Lecture: INTRO TO ARRAYS
const populations = [331.9, 126.7, 45.81, 10.33];

console.log(populations.length === 4); //true

const percentages = [
    percentageOfWorld1(populations[0]), 
    percentageOfWorld1(populations[1]), 
    percentageOfWorld1(populations[2]), 
    percentageOfWorld1(populations[3])
];
console.log('percentages', percentages);

//Lecture: BASIC ARRAY OPERATIONS (METHODS)
const neighborsUsa = ['Mexico', 'canada'];
neighborsUsa.push('Utopia'); //append 'Utopia'
//console.log(neighborsUsa);
neighborsUsa.pop(); //remove 'Utopia'

if(!neighborsUsa.includes('Germany')) console.log('Probably not a central European country.');
//change the value of an element (capitalize country in my case)
if(neighborsUsa.includes('canada')) {
    const idx = neighborsUsa.indexOf('canada');
    neighborsUsa[idx] = 'Canada';
}
console.log('neighborsUsa', neighborsUsa);

//Lecture: INTRO TO OBJECTS
const myCountry = {
    country: 'USA',
    capital: 'Washington, DC',
    language: 'English',
    population: 331.9,
    neighbors: ['Mexico', 'Canada'], 

    //methods
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`);
    },
    checkIsland: function () {
        this.isIsland = this.neighbors.length === 0 ? true : false;
    }
};

//Lecture: DOT vs BRACKET NOTATION
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`);
myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);

//Lecture: OBJECT METHODS
myCountry.describe();
myCountry.checkIsland();
console.log('isIland? ', myCountry.isIsland);

//Lecture: FOR LOOP
for(let i = 1; i <= 5; i++) {
    console.log(`Voter number ${i} is currently voting...`);
}

//Lecture: LOOPING ARRAYS, BREAKING AND CONTINUING
//using 'populations' array from 'INTRO TO ARRAYS' lecture above.
const percentages2 = [];
for(let i = 0; i < populations.length; i++) {
    percentages2[i] = percentageOfWorld1(populations[i]);
}
console.log('percentages2', percentages2);
console.log(percentages.length === percentages2.length); //true

//Lecture: LOOPING BACKWARDS AND NESTED LOOPS
const listOfNeighbors = [['Candada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for(let i = 0; i < listOfNeighbors.length; i++) {
    for(let k = 0; k < listOfNeighbors[i].length; k++) {
        console.log(`Neighbor: ${listOfNeighbors[i][k]}`);
    }
}

//Lecture: WHILE LOOP
const percentages3 = [];
let count = 0;
while(count < populations.length) {
    const pct = percentageOfWorld1(populations[count]);
    percentages3.push(pct);
    count++;
}

console.log('percentages3', percentages3);
console.log(percentages.length === percentages2.length && percentages.length === percentages3.length); //true