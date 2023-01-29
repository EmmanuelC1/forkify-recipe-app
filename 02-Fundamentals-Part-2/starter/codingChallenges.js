////////////////////////////////////
// Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
    gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
    one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

2. Use the function to calculate the average for both teams

3. Create a function 'checkWinner' that takes the average score of each team
    as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
    to the console, together with the victory points, according to the rule above.
    Example: "Koalas win (30 vs. 13)"

4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2

5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

/*
// Task 1:
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Task 3:
const checkWinner = function(avgDolphins, avgKoalas) {
    console.log(avgDolphins, avgKoalas);
    if(avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins Win! 🏆 (${avgDolphins}) vs. (${avgKoalas})`);
    } else if(avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas Win! 🏆 (${avgKoalas}) vs. (${avgDolphins})`);
    } else {
        console.log('No team has won until one team doubles the opponents score.');
    }
}
// Task 2: Data 1:
const dolphinsAvg = calcAverage(44, 23, 71);
const koalasAvg = calcAverage(65, 54, 49);

// Task 2: Data 2:
const dolphinsAvg2 = calcAverage(85, 54, 41);
const koalasAvg2 = calcAverage(23, 34, 27);

// Task 4:
const winner = checkWinner(dolphinsAvg, koalasAvg);
const winner2 = checkWinner(dolphinsAvg2, koalasAvg2);
*/

////////////////////////////////////
// Coding Challenge #2
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
    the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
    the corresponding tip, calculated based on the rules above (you can check out
    the code from first tip calculator challenge if you need to). Use the function
    type you like the most. Test the function using a bill value of 100

2. And now let's use arrays! So create an array 'bills' containing the test data below

3. Create an array 'tips' containing the tip value for each bill, calculated from
    the function you created before

4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44
*/

/*
// Task 1:
const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;

// Task 2:
const bills = [125, 555, 44];
// Task 3:
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

// Bonus:
const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(totals);
*/

////////////////////////////////////
// Coding Challenge #1
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
    implement the calculations! Remember: 
    BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
    height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same
    method on both objects). Store the BMI value to a property, and also return it
    from the method

3. Log to the console who has the higher BMI, together with the full name and the
    respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.   
*/

/*
// Task 1:
const mark = {
    //properties
    fullName: 'Mark Miller',
    mass: 78, //kg
    height: 1.69, //meters

// Task 2:
    //methods
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    //properties
    fullName: 'John Smith',
    mass: 92, //kg
    height: 1.95, //meters
 
    //methods
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

// Task 3:
if(mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else if(john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
} else {
    console.log(`Both ${mark.fullName} and ${john.fullName} have the same BMI of (${mark.bmi}).`);
}
*/