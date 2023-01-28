////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

//TEST DATA 1
// const weightMark = 78; //kg
// const heightMark = 1.69; //meters
// const weightJohn = 92; //kg
// const heightJohn = 1.95; //meters

//TEST DATA 2
// const weightMark = 95; //kg
// const heightMark = 1.88; //meters
// const weightJohn = 85; //kg
// const heightJohn = 1.76; //meters

// const BMIMark = weightMark / heightMark ** 2;
// const BMIJohn = weightJohn / heightJohn ** 2;
// console.log(BMIMark, BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you wrote, and improve it.

1. Print a nice output to the console, saying who has the higher BMI. The message
    is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
    BMI (28.3) is higher than John's (23.9)!"
*/

// if(BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn}).`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark}).`);
// }

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:

1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

//1. Calculate the avg scores
//Data 1:
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

//Data Bonus 1:
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// console.log(scoreDolphins, scoreKoalas);

//Data Bonus 2:
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins, scoreKoalas);

//2. Compare
// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Team Dolphins Wins! 🏆');
// } else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('Team Koalas Wins! 🏆');
// } else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log('There is a tie between Team Dolphins and Team Koalas! 🏆');
// } else {
//     console.log('There is a minimum requirement of 100 points, therefore there are no winners.');
// }

////////////////////////////////////
// Coding Challenge #3

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)

2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430
*/

// const bill1 = 275;
// const bill2 = 40;
// const bill3 = 430;

// //Task 1:
// const tip1 = bill1 >= 50 && bill1 <= 300 ? (bill1 * .15) : (bill1 * .20); //15% tip
// const tip2 = bill2 >= 50 && bill2 <= 300 ? (bill2 * .15) : (bill2 * .20); //20% tip
// const tip3 = bill3 >= 50 && bill3 <= 300 ? (bill3 * .15) : (bill3 * .20); //20% tip

// //Task 2:
// console.log(`The bill was $${bill1}, the tip was $${tip1}, and the total is $${bill1 + tip1}`);
// console.log(`The bill was $${bill2}, the tip was $${tip2}, and the total is $${bill2 + tip2}`);
// console.log(`The bill was $${bill3}, the tip was $${tip3}, and the total is $${bill3 + tip3}`);