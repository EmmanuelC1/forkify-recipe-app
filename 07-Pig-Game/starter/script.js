'use strict';

//Selecting Elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceImg = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting Condition Global Variables
let scoreCounter;
let activePlayer;
let scores; //used for scoreElements

const newGame = () => {
  scores = [0, 0];
  scoreCounter = 0;
  activePlayer = 0;

  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceImg.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  btnRoll.disabled = false;
  btnHold.disabled = false;
};
newGame();

const changeActivePlayer = () => {
  //reset current element score and counter
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  scoreCounter = 0;

  //switch active player
  activePlayer = activePlayer === 0 ? 1 : 0;

  //switch active player class
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const displayWinner = () => {
  //add winnner class to winning player, and remove active player class
  document.querySelector(`.player--${activePlayer}`).classList.add('player--winner'); //prettier-ignore
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active'); //prettier-ignore
  diceImg.classList.add('hidden');

  //disable buttons
  btnRoll.disabled = true;
  btnHold.disabled = true;
};

//Event Listeners
btnNewGame.addEventListener('click', newGame);

btnRoll.addEventListener('click', () => {
  //generate random dice roll
  const diceRoll = Math.floor(Math.random() * 6 + 1);

  //display dice
  diceImg.classList.remove('hidden');
  diceImg.src = `dice-${diceRoll}.png`;

  //check for rolled 1
  if (diceRoll !== 1) {
    //add diceRoll to current score element and display in current element
    scoreCounter += diceRoll;
    document.querySelector(`#current--${activePlayer}`).textContent = scoreCounter; //prettier-ignore
  } else {
    changeActivePlayer();
  }
});

btnHold.addEventListener('click', () => {
  //add current score to active player's score
  scores[activePlayer] += scoreCounter;
  document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]; //prettier-ignore

  //check if player's score is >= 100. If true, display winner, else switch players
  if (scores[activePlayer] >= 100) {
    displayWinner();
  } else {
    changeActivePlayer();
  }
});
