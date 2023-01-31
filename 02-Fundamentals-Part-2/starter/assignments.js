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
console.log(populations.length === 4);
const percentages = [percentageOfWorld1(332.9), percentageOfWorld1(126.7), percentageOfWorld1(45.81), percentageOfWorld1(10.33)];
console.log(percentages);

//Lecture: BASIC ARRAY OPERATIONS (METHODS)
