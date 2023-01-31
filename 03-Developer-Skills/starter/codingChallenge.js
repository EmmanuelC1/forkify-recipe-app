'use strict';
////////////////////////////////////
// Coding Challenge #1
/* 
Given an array of forecasted maximum temperatures, the thermometer displays a
    string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
    days ... 21ºC in 2 days ... 23ºC in 3 days ..."
    
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.

2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

//Task 1:
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('...', str);
};

//Task 2:
// A) Understanding the Problem:
// Array transformed into string, separated by '...'
// What is the x days?

// B) Break up Into Sub-Problems:
// –– Transform array into a string
// –– Trasnsform each element into string with 'ºC'
// –– 'days' would be the index + 1 since day 0 does not exist
// –– Separate each string with '...'
// –– Log to console

const maxTemps1 = [17, 21, 23];
const maxTemps2 = [12, 5, -5, 0, 4];

printForecast(maxTemps1);
printForecast(maxTemps2);
