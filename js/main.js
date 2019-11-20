'use strict';

const elementButton = document.querySelector('#button-default');
const elementInput = document.querySelector('#inputcell');
const elementClue= document.querySelector('#clue');
const attempts= document.querySelector('#attempts');

const getRandomNumber = max => Math.ceil(Math.random() * max);

function playGame(){
    getRandomNumber(100)
    console.log(getRandomNumber(100));
    
}

elementButton.addEventListener('click', playGame);