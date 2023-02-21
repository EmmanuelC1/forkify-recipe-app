'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

///////////////////////////////////////
// Coding Challenge #1
/*
    We're building a football betting app (soccer for my American friends 😅)!

    Suppose we get data from a web service about a certain game ('game' variable on
      next page). In this challenge we're gonna work with that data.

    Your tasks:
      1. Create one player array for each team (variables 'players1' and
        'players2')

      2. The first player in any player array is the goalkeeper and the others are field
        players. For Bayern Munich (team 1) create one variable ('gk') with the
        goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
        field players

      3. Create an array 'allPlayers' containing all players of both teams (22
        players)

      4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
        new array ('players1Final') containing all the original team1 players plus
        'Thiago', 'Coutinho' and 'Perisic'

      5. Based on the game.odds object, create one variable for each odd (called
        'team1', 'draw' and 'team2')

      6. Write a function ('printGoals') that receives an arbitrary number of player
        names (not an array) and prints each of them to the console, along with the
        number of goals that were scored in total (number of player names passed in)

      7. The team with the lower odd is more likely to win. Print to the console which
        team is more likely to win, without using an if/else statement or the ternary
        operator.

    Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
      Then, call the function again with players from game.scored
*/

// /*
// Task 6: function ('printGoals') that receives an arbitrary number of player names (not an array). Prints each player and goals scored
const printGoals = function (...players) {
  if (players.length !== 0) {
    console.log(`${players.length} goals were scored this match by:`);
    for (let i = 0; i < players.length; i++) {
      console.log(players[i]);
    }
  }
};

// Task 1: create player array for each team
const [players1, players2] = game.players;

// Task 2: set first player to 'gk' and the rest to 'fieldPlayers'
const [gkBayern, ...fieldPlayersBayern] = players1;
const [gkBorrussia, ...fieldPlayersBorrussia] = players2;

// Task 3: set all players of both teams (22 player) to 'allPlayers'
const allPlayers = [...players1, ...players2];

// Task 4: add substitutions for Bayern Munich to 'players1Final' along with original players
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// Task 5: Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const { team1, x: draw, team2 } = game.odds;
// const {odds: {team1, x: draw, team2} } = game; //prettier-ignore (nested destructuring)

// Task 6: test data
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// Task 7: log which team is more likely to win, without using an if/else statement or the ternary operator. (smaller odds = likely winner)
team1 < team2 && console.log('Team 1 is more likely to win.'); //when condition is true (&&) will continue and execute console.log()
team1 > team2 && console.log('Team 2 is more likely to win.');
// */

///////////////////////////////////////
// Coding Challenge #2
/*
  Let's continue with our football betting app! Keep using the 'game' variable from before.

  Your tasks:
  1. Loop over the game.scored array and print each player name to the console,
    along with the goal number (Example: "Goal 1: Lewandowski")

  2. Use a loop to calculate the average odd and log it to the console (We already
    studied how to calculate averages, you can go check if you don't remember)

  3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
    Odd of victory Bayern Munich: 1.33
    Odd of draw: 3.25
    Odd of victory Borrussia Dortmund: 6.5
  Get the team names directly from the game object, don't hardcode them
    (except for "draw"). Hint: Note how the odds and the game objects have the
    same property names 😉

  4. Bonus: Create an object called 'scorers' which contains the names of the
    players who scored as properties, and the number of goals as the value. In this
    game, it will look like this:

    {
      Gnarby: 1,
      Hummels: 1,
      Lewandowski: 2
    }
*/

// /*
// Task: 1
for (const [idx, player] of game.scored.entries()) {
  // games.scored.entries() gives us [[index, value]]
  console.log(`Goal ${idx + 1}: ${player}`);
}

// Task 2:
const gameOdds = Object.values(game.odds); // get values of game.odds object
let sum = 0;

for (const odds of gameOdds) sum += odds;

const avgOdds = sum / gameOdds.length;
console.log('Average Odds', avgOdds);

// Task 3:
for (const [team, odd] of Object.entries(game.odds)) {
  if (team !== 'x') console.log(`Odd of victory ${game[team]}: ${odd}`);
  else console.log(`Odd of draw: ${odd}`);
}

// Task 4 (Bonus):
const scorers = {};
for (const player of game.scored) {
  // if (scorers.hasOwnProperty(player)) {
  //   scorers[player] += 1;
  // } else {
  //   scorers[player] = 1;
  // }

  scorers[player] ? scorers[player]++ : (scorers[player] = 1); // using ternary operator
}
console.log(scorers);
// */

///////////////////////////////////////
// Coding Challenge #3
/*
  Let's continue with our football betting app! This time, we have a map called
    'gameEvents' (see below) with a log of the events that happened during the
    game. The values are the events themselves, and the keys are the minutes in which
    each event happened (a football game has 90 minutes plus some extra time).

  Your tasks:
  1. Create an array 'events' of the different game events that happened (no
    duplicates)

  2. After the game has finished, is was found that the yellow card from minute 64
    was unfair. So remove this event from the game events log.

  3. Compute and log the following string to the console: "An event happened, on
    average, every 9 minutes" (keep in mind that a game has 90 minutes)

  4. Loop over 'gameEvents' and log each element to the console, marking
    whether it's in the first half or second half (after 45 min) of the game, like this:
    [FIRST HALF] 17: ⚽ GOAL
*/

// /*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Task 1:
const events = [...new Set(gameEvents.values())];
console.log(events);

// Task 2:
gameEvents.delete(64);
console.log(gameEvents);

// Task 3:
const lastMinute = [...gameEvents.keys()].pop(); // spread all gameEvent keys into an array and pop last key (92)
const avgEvent = lastMinute / gameEvents.size; // 92 / 10
console.log(`An event happened, on average every ${avgEvent} minutes.`);

// Task 4:
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
// */

///////////////////////////////////////
// Coding Challenge #4
/*
  Write a program that receives a list of variable names written in underscore_case
    and convert them to camelCase.

  The input will come from a textarea inserted into the DOM (see code below to
    insert the elements), and conversion will happen when the button is pressed.
    (input will only be 2 words like a_b).

  Test data (pasted to textarea, including spaces):
    underscore_case
      first_name
    Some_Variable
       calculate_AGE
    delayed_departure

  Should produce this output (5 separate console.log outputs):
    underscoreCase      ✅
    firstName           ✅✅
    someVariable        ✅✅✅
    calculateAge        ✅✅✅✅
    delayedDeparture    ✅✅✅✅✅
*/

// /*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textArea = document.querySelector('textarea');
const btn = document.querySelector('button');

// Default Values (so I dont have to input manually everytime)
btn.innerHTML = 'Submit';
textArea.value = 'underscore_case\n first_name\nSome_Variable\n  calculate_AGE\ndelayed_departure'; //prettier-ignore

const convertCamelCase = function (names) {
  for (const [i, n] of names.entries()) {
    const [first, second] = n.split('_');
    const camelCase = first + second[0].toUpperCase() + second.slice(1) + ' '; //prettier-ignore
    const output = camelCase.padEnd(20) + '✅'.repeat(i+1); //prettier-ignore
    console.log(output);
  }
};

btn.addEventListener('click', () => {
  //store each input name in array separately (excluding spaces or \n, all lowercase)
  const input = [...textArea.value.toLowerCase().split(' ').join('').split('\n'),]; //prettier-ignore
  convertCamelCase(input);
});
// */
