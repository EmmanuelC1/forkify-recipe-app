'use strict';

const secretNumber = Math.floor(Math.random() * 20 + 1);
console.log(secretNumber);

const checkBtn = document.querySelector('.check');

checkBtn.addEventListener('click', e => {
  console.log(Number(document.querySelector('.guess').value));
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    //empty input
    console.log('Not a valid number.');
    document.querySelector('.message').textContent = '🚫 Not a valid number.';
    return;
  }
  if (guess === secretNumber) {
    //correct guess
    console.log('Correct Number!');
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = guess;
  } else {
    //wrong guess
    console.log('Wrong number, try again!');
    document.querySelector('.message').textContent =
      '❌ Wrong number, try again!';
    let updatedScore = Number(document.querySelector('.score').textContent);
    updatedScore--;
    document.querySelector('.score').textContent = updatedScore;
  }
});
