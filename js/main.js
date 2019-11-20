'use strict';

const elementButton = document.querySelector('#button-default');
const elementInput = document.querySelector('#wonderingnumber');
const elementClue = document.querySelector('#clue');
const elementAttempts = document.querySelector('#attempts');

const getRandomNumber = max => Math.ceil(Math.random() * max);

function playGame(){
    const randomNumber = getRandomNumber(100)
    console.log(randomNumber);

    if (elementInput.value > randomNumber) {
        elementClue.innerHTML = 'Demasiado alto';
    } else if(elementInput.value < randomNumber) {
        elementClue.innerHTML = 'Demasiado bajo'
    } else if(elementInput.value = randomNumber){
        elementClue.innerHTML = '¡Has ganado, campeona!'
    }

};

elementButton.addEventListener('click', playGame);