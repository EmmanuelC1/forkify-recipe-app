// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////
// Using Google, StackOverflow and MDN

/* Problem 1: 
    We work for a company building a small home thermometer.
    Our most recent task is this: "Given an array of temperatures
    of one day, calculate the temperature amplitude. Keep in mind 
    that sometimes there might be a sensor error."
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the Problem
// –– What is temp amplitude? diff between lowest and highest temp
// –– How to compute the max and min temps?
// –– What does a sensor error look like? And how to handle it?

// 2)  Breaking up Into Sub-Problems
// –– How to ignore errors?
// –– Find max value in temp array
// –– Find min value in temp array
// –– Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue; //bypass errors
    if (currTemp > max) max = currTemp; //update max
    if (currTemp < min) min = currTemp; //update min
  }
  console.log('Max:', max, 'Min:', min);
  return max - min; //amplitude
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//Problem 2: Function should now receive 2 arrays of temps.

// 1) Understanding the Problem
// –– With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2)  Breaking up Into Sub-Problems
// –– Merge two arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue; //bypass errors
    if (currTemp > max) max = currTemp; //update max
    if (currTemp < min) min = currTemp; //update min
  }
  console.log('Max:', max, 'Min:', min);
  return max - min; //amplitude
};

const amplitudeNew = calcTempAmplitudeNew(temperatures, [10, -6, 11, 15, -7]);
console.log(amplitudeNew);

///////////////////////////////////////
// Debugging with the Console and Breakpoints
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    // C)
    //value: Number(prompt('Degrees celcius:')),
    value: 10, //comented line above so prompt wont be annoying.
  };

  // B)
  console.table(measurement);
  //   console.log(measurement.value); // 10
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) Identify the bug
console.log(measureKelvin()); //input: 10 output: '10273' expected: 283

//Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  // BUG max and min should be set to 'temps[0]'
  let max = 0;
  let min = 0;

  for (let i = 1; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue; //bypass errors
    // debugger; //You can create breakpoints using 'debugger;'
    if (currTemp > max) max = currTemp; //update max
    if (currTemp < min) min = currTemp; //update min
  }
  console.log('Max:', max, 'Min:', min);
  return max - min; //amplitude
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) Identify the bug
console.log(amplitudeBug); //the min and max are wrong so amplitude was diff than expected
