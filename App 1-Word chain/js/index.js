'use strict';

// Lists of used words - one for each player
const listofWords1 = [];
const listofWords2 = [];
// Variables
const input = document.querySelector('input');
const wordList1 = document.querySelector('.word-list1');
const wordList2 = document.querySelector('.word-list2');
const actualScore1 = document.querySelector('.actual-score1');
const actualScore2 = document.querySelector('.actual-score2');
let fakeScore1 = 0;
let fakeScore2 = 0;
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const arrow1 = document.querySelector('.arrow-1');
const arrow2 = document.querySelector('.arrow-2');
let activePlayer = 0;
let previousWord1 = listofWords1[0];
let previousWord2 = listofWords2[0];
const newGame = document.querySelector('.new-game');
const winner1 = document.querySelector('.winner-1');
const winner2 = document.querySelector('.winner-2');
const hide1 = document.querySelector('.hide-1');
const hide2 = document.querySelector('.hide-2');
const show1 = document.querySelector('.show-1');
const show2 = document.querySelector('.show-2');

let winningNumber = prompt('What is gonna be the winning score?');
while (!/^[0-9]+$/.test(winningNumber)) {
  winningNumber = prompt(
    'Please enter a valid number! What is gonna be the winning score?'
  );
}

const addWord = (list, word) => {
  const span = document.createElement('span');
  span.innerText = word + ', ';
  list.insertAdjacentElement('beforeend', span);
};

const updateValue = function (event) {
  if (event.key === 'Enter') {
    console.log('Enter pressed!');
    const value = event.target.value ?? '';

    const updateValue1 = function () {
      listofWords1.unshift(value);
      addWord(wordList1, value);
      actualScore1.textContent =
        Number(actualScore1.textContent) + value.length;
      fakeScore1 = actualScore1.textContent;
      input.value = '';
      previousWord1 = value;
      player1.classList.remove('active-player');
      player2.classList.add('active-player');
      activePlayer = 1;
    };

    const updateValue2 = function () {
      listofWords2.unshift(value);
      addWord(wordList2, value);
      actualScore2.textContent =
        Number(actualScore2.textContent) + value.length;
      fakeScore2 = actualScore2.textContent;
      input.value = '';
      previousWord2 = value;
      player2.classList.remove('active-player');
      player1.classList.add('active-player');
      activePlayer = 0;
    };

    // If the active player is player1, check if the first letter of the word in input field matches the last letter of the last word in player2 used words array and vice versa
    // AND if the word doesn't match any of the words in either array
    if (!listofWords1.includes(value) && !listofWords2.includes(value)) {
      // If the game has already started
      if (listofWords1.length !== 0 || listofWords2.length !== 0) {
        // If the active player is player1
        if (
          player1.classList.contains('active-player') &&
          activePlayer === 0 &&
          previousWord2?.charAt(previousWord2.length - 1) === value.charAt(0)
        ) {
          updateValue1();
          // If the player1 has won the game (therefore got to or exceeded 500 points)
          if (fakeScore1 >= Number(winningNumber)) {
            player2.classList.remove('active-player');
            player1.classList.add('winner');
            winner1.classList.remove('hidden');
          }
        }
        // If the active player is player2
        else if (
          player2.classList.contains('active-player') &&
          activePlayer === 1 &&
          previousWord1?.charAt(previousWord1.length - 1) === value.charAt(0)
        ) {
          updateValue2();
          // If the player2 has won the game (therefore got to or exceeded 500 points)
          if (fakeScore2 >= Number(winningNumber)) {
            player1.classList.remove('active-player');
            player2.classList.add('winner');
            winner2.classList.remove('hidden');
          }
        }
        // If what you type in is bullshit or last letter of the previous word doesn't match the first letter of current word
        else {
          alert('⛔ Invalid word!');
          input.value = '';
        }
      }
      // If the game hasn't started yet
      else {
        // If the active player is player1
        if (player1.classList.contains('active-player')) {
          updateValue1();
        }
        // If the active player is player2
        else if (player2.classList.contains('active-player')) {
          updateValue2();
        }
      }
    }
    // If the word matches any of the words in either array
    else if (listofWords1.includes(value) || listofWords2.includes(value)) {
      alert('❌ That word has already been used!');
      input.value = '';
    }
  }
};

input.addEventListener('keydown', updateValue);

newGame.addEventListener('click', function () {
  player1.classList.remove('winner');
  player2.classList.remove('winner');
  player1.classList.add('active-player');
  player2.classList.remove('active-player');
  wordList1.textContent = wordList2.textContent = '';
  fakeScore1 = fakeScore2 = actualScore1.textContent = actualScore2.textContent = listofWords1.length = listofWords2.length = 0;
  input.value = '';
  winner1.classList.add('hidden');
  winner2.classList.add('hidden');
  winningNumber = prompt('What is gonna be the new winning score?');
  while (!/^[0-9]+$/.test(winningNumber)) {
    winningNumber = prompt(
      'Please enter a valid number! What is gonna be new the winning score?'
    );
  }
});

arrow1.addEventListener('click', function () {
  wordList1.classList.toggle('hidden');
  hide1.classList.toggle('hidden');
  show1.classList.toggle('hidden');
});

arrow2.addEventListener('click', function () {
  wordList2.classList.toggle('hidden');
  hide2.classList.toggle('hidden');
  show2.classList.toggle('hidden');
});
