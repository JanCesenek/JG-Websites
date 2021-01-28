'use strict';

const listofWords1 = [];
const listofWords2 = ['carrot'];

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
let wordCon1 = listofWords1[listofWords1.length - 1];
let wordCon2 = listofWords2[listofWords2.length - 1];

const updateValue = function(value) {
    if (value.key === 'Enter') {
        if (activePlayer === 0 ? wordCon2.charAt(wordCon2.length - 1) === value.charAt(0): wordCon1.charAt(wordCon1.length - 1) === value.charAt(0) && (!listofWords1.contains(value) && !listofWords2.contains(value))) {
            if (player1.classList.contains('active-player')) {
                listofWords1.push(value);
                wordList1.textContent += listofWords1[listofWords1.length - 1];
                player1.classList.remove('active-player');
                player2.classList.add('active-player');
                value.length += score1;
                activePlayer = 1;
            } else {
                listofWords2.push(value);
                wordList2.textContent += listofWords2[listofWords2.length - 1];
                player2.classList.remove('active-player');
                player1.classList.add('active-player');
                value.length += score2;
                activePlayer = 0;
            }
        } else if (listofWords1.contains(value) || listofWords2.contains(value)) {
            alert('❌ That word has already been used!');
        } else {
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