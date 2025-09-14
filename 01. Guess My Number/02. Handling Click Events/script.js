'use strict';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    console.log('NO GUESS');
    document.querySelector('.message').textContent = 'No number ⛔';
  }
});
