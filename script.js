'use strict';

//functions
const randNum = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const changeSecretNum = function (number) {
  document.querySelector('.number').textContent = number;
};
const backgroundColor = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};
const secretNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
const changeScore = function (score) {
  document.querySelector('.score').textContent = score;
};

//variables
let secretNumber = randNum();
let highScore = 0;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //WHEN INCORRECT INPUT
  if (!guess || guess > 20) {
    displayMessage('Only numbers from 1 - 20!');

    //WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    changeSecretNum(secretNumber);
    backgroundColor('#60b347');
    secretNumberWidth('30rem');
    if (score > highScore) {
      highScore = score;
      highScore = document.querySelector('.highscore').textContent = highScore;
    }
    // WHEN GUESS IS WRONG - DRY CODE
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'The number is too high!'
          : 'The number is too low!'
      );
      score--;
      changeScore(score);
    } else {
      displayMessage('You lost the game!');
      changeScore(0);
      backgroundColor('#FF0000');
      secretNumberWidth('30rem');
    }
  }
});

//
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = randNum();
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  backgroundColor('#222');
  changeScore(score);
  changeSecretNum('?');
  secretNumberWidth('15rem');
});

//WHEN TOO HIGH
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent =
//       'The number is too high!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the game lol!';
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('body').style.backgroundColor = '#FF0000';
//     document.querySelector('.number').style.width = '30rem';
//   }

//   //WHEN TOO LOW
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'The number is too low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the game lol!';
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('body').style.backgroundColor = '#FF0000';
//     document.querySelector('.number').style.width = '30rem';
//   }
// }
