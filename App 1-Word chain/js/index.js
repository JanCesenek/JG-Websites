'use strict';

// Lists of used words - one for each player
const listofWords1 = [];
const listofWords2 = ['carrot'];

// Variables
const input = document.querySelector('input');
const wordList1 = document.querySelector('.word-list1');
const wordList2 = document.querySelector('.word-list2');
let score1 = 0;
let score2 = 0;
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const arrow1 = document.querySelector('.arrow-1');
const arrow2 = document.querySelector('.arrow-2');
let activePlayer = 0;
let wordCon1 = listofWords1[0];
let wordCon2 = listofWords2[0];

const updateValue = function(value) {
    if (value.key === 'Enter') {
        // If the active player is player1, check if the first letter of the word in input field matches the last letter of the last word in player2 used words array and vice versa
        // AND if the word doesn't match any of the words in either array
        if ((!listofWords1.contains(value) && !listofWords2.contains(value)) && activePlayer === 0 ? wordCon2.charAt(wordCon2.length - 1) === value.charAt(0): wordCon1.charAt(wordCon1.length - 1) === value.charAt(0)) {
            // If the active player is player1
            if (player1.classList.contains('active-player')) {
                // Adds the word in input field to the player1-used words array
                listofWords1.unshift(value);
                wordList1.textContent += wordCon1;
                // Updates the player1 score based on the length of the word
                value.length += score1;
                // Switches players
                player1.classList.remove('active-player');
                player2.classList.add('active-player');
                activePlayer = 1;
            } 
            // If the active player is player2 - same logic as for player1
            else {
                listofWords2.unshift(value);
                wordList2.textContent += wordCon2;
                player2.classList.remove('active-player');
                player1.classList.add('active-player');
                value.length += score2;
                activePlayer = 0;
            }
        
        }
        // If the word matches any of the words in either array 
        else if (listofWords1.contains(value) || listofWords2.contains(value)) {
            alert('❌ That word has already been used!');
        }
        // First letter of the word in input field doesn't match the last letter of the last used word
        else {
            alert('⛔ Invalid word!');
        }
    }
}

input.addEventListener('keydown', updateValue);

arrow1.addEventListener('click', function() {
    wordList1.classList.toggle('hidden');
});

arrow2.addEventListener('click', function() {
    wordList2.classList.toggle('hidden');
});