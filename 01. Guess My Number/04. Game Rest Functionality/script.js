'use strict';

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // ANCHOR no number
  if (!guess) {
    console.log('NO GUESS');
    document.querySelector('.message').textContent = 'No number ⛔';
  }

  // ANCHOR correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }

  // ANCHOR greater
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👆🏻 Too high...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😭 You lost the game...';
      document.querySelector('.score').textContent = 0;
    }
  }

  // ANCHOR less
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👇🏻 Too low...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😭 You lost the game...';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';

  console.log(secretNumber);

  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
