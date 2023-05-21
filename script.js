'use strict';
/*
*******************************************************************
                  SECRET NUMBER GAME BY QJ
*******************************************************************
*/
// step 1: generate random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// step 2: Active check button to do something
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  //When there is no input
  if (!guess) {
    displayMessage('🙆‍♂️ No Number');
  }
  //when You win
  else if (guess === secretNumber && guess > 0) {
    displayMessage('🏆 You Won the Game!');
    console.log((document.querySelector('.number').textContent = secretNumber));
    document.querySelector('body').style.backgroundColor = '#f77f00';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.backgroundColor = 'Green';
    document.querySelector('.number').style.color = '#eee';
    document.querySelector('.guess').style.backgroundColor = 'Green';
    if (score >= highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // Guess is Wrong
  else if (guess !== secretNumber && guess > 0) {
    if (score > 1) {
      score--;
      displayMessage(guess < secretNumber ? '📉 Too Low!' : '💹 Too High!');
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😢You Lost the Game!');
    }
  } else if (guess < 0) {
    displayMessage('Below Zero');
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.backgroundColor = '#eee';
  document.querySelector('.number').style.color = '#333';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
