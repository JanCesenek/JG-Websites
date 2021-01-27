const listofWords1 = [];
const listofWords2 = [];

const input = document.querySelector('input');
const wordList1 = document.getElementsByClassName('word-list1');
const wordList2 = document.getElementsByClassName('word-list2');
const score1 = document.getElementsByClassName('actual-score1');
const score2 = document.getElementsByClassName('actual-score2');
const player1 = document.getElementsByClassName('player1');
const player2 = document.getElementsByClassName('player2');
const arrow1 = document.getElementsByClassName('arrow-1');
const arrow2 = document.getElementsByClassName('arrow-2');

const updateValue = function(value) {
    if (key === 'Enter') {
        if (player1.classList.contains('active-player')) {
            listofWords1.push(value);
            wordList1.textContent = listofWords1;
            player1.classList.remove('active-player');
            player2.classList.add('active-player');
        } else {
            listofWords2.push(value);
            wordList2.textContent = listofWords2;
            player2.classList.remove('active-player');
            player1.classList.add('active-player');
        }
    }
}

input.addEventListener('input', updateValue); 

arrow1.addEventListener('click', function() {
    wordList1.classList.toggle('hidden');
});

arrow2.addEventListener('click', function() {
    wordList2.classList.toggle('hidden');
});