'use strict';

const resetGame = () => {
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  changeMessage();
  changeBackgroudColor('#222'); //black background
  secretNumber = setSecretNumber();
  console.log(secretNumber);
  checkBtn.disabled = false;
};

const changeMessage = message => {
  if (message === 'correct') {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (message === 'wrong') {
    document.querySelector('.message').textContent = '❌ Wrong number, try again!'; //prettier-ignore
  } else if (message === 'invalid') {
    document.querySelector('.message').textContent = '🚫 Not a valid number.';
  } else {
    document.querySelector('.message').textContent = 'Start guessing...';
  }
};

const setHighscrore = score => {
  const highscore = Number(document.querySelector('.highscore').textContent);

  if (score > highscore) {
    document.querySelector('.highscore').textContent = score;
  }
};

const changeBackgroudColor = color => {
  document.body.style.background = color;
};

const setSecretNumber = function () {
  return Math.floor(Math.random() * 20 + 1); //FIX ME try avoiding same number being secretNumber
};

let secretNumber = setSecretNumber();
console.log(secretNumber);

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

checkBtn.addEventListener('click', e => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //empty input
    changeMessage('invalid');
    return;
  }

  if (guess === secretNumber) {
    //correct guess
    changeMessage('correct');

    document.querySelector('.number').textContent = guess; //display secreNumber in '?'
    changeBackgroudColor('#60b347'); //green background

    const score = Number(document.querySelector('.score').textContent);
    setHighscrore(score);

    //disable checkBtn to avoid spamming correct guess
    checkBtn.disabled = true;
  } else {
    //wrong guess
    changeMessage('wrong');

    let updatedScore = Number(document.querySelector('.score').textContent);
    updatedScore--; //TODO can rework this and make it cleaner
    document.querySelector('.score').textContent = updatedScore;
  }
});

againBtn.addEventListener('click', e => {
  resetGame();
});
