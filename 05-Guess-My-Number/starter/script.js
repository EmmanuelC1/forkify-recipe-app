'use strict';

const resetGame = () => {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  changeMessage('reset');
  changeBackgroudColor('#222'); //black background
  secretNumber = setSecretNumber();
  checkBtn.disabled = false;
  // console.log(secretNumber);
};

const winner = guess => {
  document.querySelector('.number').textContent = guess; //display secreNumber in '?'
  document.querySelector('.number').style.width = '30rem'; //display a wider div for secretNumber
  changeMessage('correct');
  changeBackgroudColor('#60b347'); //green background
  checkBtn.disabled = true; //disable checkBtn to avoid spamming correct guess

  const currScore = Number(document.querySelector('.score').textContent);
  setHighscrore(currScore);
};

const gameOver = () => {
  document.querySelector('.number').textContent = secretNumber; //display secretNumber
  document.querySelector('.number').style.width = '30rem'; //display a wider div for secretNumber
  changeMessage('game over');
  changeBackgroudColor('#FB2125'); //red background
  checkBtn.disabled = true;
};

const changeMessage = message => {
  if (message === 'correct') {
    document.querySelector('.message').textContent = '🎯 Correct Number!';
  } else if (message === 'wrong') {
    document.querySelector('.message').textContent = '❌ Wrong number, try again!'; //prettier-ignore
  } else if (message === 'invalid') {
    document.querySelector('.message').textContent = '🚫 Not a valid number.';
  } else if (message === 'game over') {
    document.querySelector('.message').textContent = '💥 Game Over!';
  } else if (message === 'reset') {
    document.querySelector('.message').textContent = 'Start guessing...';
  }
};

const higherOrLower = guess => {
  if (guess > 20 || guess < 1) {
    document.querySelector('.message').textContent = '🚫 Guess a number between 1 and 20'; //prettier-ignore
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent += `(Higher than ${guess})`;
  } else {
    document.querySelector('.message').textContent += `(Lower than ${guess})`;
  }
};

const setHighscrore = currScore => {
  if (currScore > highscore) {
    highscore = currScore;
    document.querySelector('.highscore').textContent = highscore;
  }
};

const updateScore = () => {
  score--;
  document.querySelector('.score').textContent = score;
};

const changeBackgroudColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};

const setSecretNumber = () => {
  return Math.floor(Math.random() * 20 + 1);
};

let secretNumber = setSecretNumber();
let score = 20;
let highscore = 0;
// console.log(secretNumber);

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

checkBtn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //empty input
    changeMessage('invalid');
    return;
  }

  if (score > 1) {
    if (guess === secretNumber) {
      //correct guess
      winner(guess);
    } else {
      //wrong guess
      changeMessage('wrong');
      higherOrLower(guess);
      updateScore();
    }
  } else {
    //score reaches 0... game over!
    updateScore();
    gameOver();
  }
});

againBtn.addEventListener('click', () => {
  resetGame();
});
