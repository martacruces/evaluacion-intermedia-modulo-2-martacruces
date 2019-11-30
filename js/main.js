'use strict';

const elementButton = document.querySelector('#button-default');
const elementInput = document.querySelector('#wonderingnumber');
const elementClue = document.querySelector('#clue');
const elementAttemps = document.querySelector('#attemps');

const maxNumber = 100;

let attemps = 0;
elementAttemps.innerHTML = attemps;

const getRandomNumber = max => Math.ceil(Math.random() * max);
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

const increaseAttemps = () => {
    attemps++;
    elementAttemps.innerHTML = attemps;
};

const checkUserNumber = () => {
    if(elementInput.value > maxNumber || elementInput.value === '' || elementInput.value <= 0){
        elementClue.innerHTML = 'El número tiene que estar entre 1 y 100'
    } else if (elementInput.value > randomNumber){
        elementClue.innerHTML = 'El número es demasiado alto';
    } else if (elementInput.value < randomNumber) {
        elementClue.innerHTML = 'El número es demasiado bajo';
    } else {
        elementClue.innerHTML = '¡HAS GANADO!';
    }
};

function playGame(){
    increaseAttemps();
    checkUserNumber();
};

elementButton.addEventListener('click', playGame);