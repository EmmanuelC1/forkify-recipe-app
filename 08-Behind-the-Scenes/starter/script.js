'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      //block scope
      var millenial = true;

      //creating new variable with same name as outer scope's variable
      const firstName = 'Jonas'; //Scope Chain uses local scope first so 'Emmanuel' doesnt get used since 'Jonas' was found first

      const str = `Oh, and you're a millenial, ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUPUT!'; // try to re-assign existing outer scope's variable
    }

    // console.log(str); //ReferenceError: str defined in block scope
    console.log(millenial); //true, var is not block scope, they are function scope
    // add(2, 3); //ReferenceError add(a, b) defined in block scope
    console.log(output); //'NEW OUTPUT!'
  }
  printAge();

  return age;
}

const firstName = 'Emmanuel';
calcAge(1996);
