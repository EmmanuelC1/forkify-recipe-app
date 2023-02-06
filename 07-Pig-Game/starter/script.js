'use strict';

const newGame = () => {
  //Reset scoreXEl
  //Reset scoreCounter
  //Reset playerXEl
  //Reset currentXEl
  //Enable buttons
  //Hide dice image
};

const handleRoll = diceRoll => {};

const changeActivePlayer = () => {
  scoreCounter = 0; //reset counter, get ready to track next player

  //Player 0
  if (!activePlayer) {
    activePlayer = !activePlayer;
    player0El.classList.remove('player--active');
    player1El.classList.add('player--active');

    current0El.textContent = 0;

    //Player 1
  } else {
    activePlayer = !activePlayer;
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    current1El.textContent = 0;
  }
};

const winner = player => {
  //change playerXEl to black
  //disable buttons
};

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
score0Element.textContent = 0;
score1Element.textContent = 0;
diceImg.classList.add('hidden');

let scoreCounter = 0;
let activePlayer = 0;

//Event Listeners
btnNewGame.addEventListener('click', newGame);

btnRoll.addEventListener('click', () => {
  //Generate random dice roll
  const diceRoll = Math.floor(Math.random() * 6 + 1);
  console.log(diceRoll);

  //Display dice
  diceImg.classList.remove('hidden');
  diceImg.src = `dice-${diceRoll}.png`;

  //Check for rolled 1
  if (diceRoll !== 1) {
    //Add diceRoll to current score
    scoreCounter += diceRoll;
    activePlayer ? (current1El.textContent = scoreCounter) : (current0El.textContent = scoreCounter); //prettier-ignore
  } else {
    //Change active player
    changeActivePlayer();
  }
});

btnHold.addEventListener('click', () => {
  activePlayer ? (score1Element.textContent = Number(score1Element.textContent) + scoreCounter) : (score0Element.textContent = Number(score0Element.textContent) + scoreCounter); //prettier-ignore
  if (Number(score0Element.textContent) >= 20) {
    winner(player0El); //FIX ME figure out what to send as a parameter
    console.log('Player 0 wins');
  } else if (Number(score1Element.textContent) >= 20) {
    winner(player1El); //FIX ME figure out what to send as a parameter
    console.log('Player 1 wins');
  } else {
    changeActivePlayer();
  }
});
