console.log('JS OK')

// OPERAZIONI PRELIMINARI

// Recupero gli elementi dal DOM
const countdown = document.getElementById('countdown');
const gameMode = document.getElementById('game-mode');
const playButton = document.getElementById('play-btn')
const toGuessNumbers = document.getElementById('to-guess-numbers');
const guessNumbers = document.getElementById('guess-number');
const guessInput = document.getElementById('guess-input');
const scoreButton = document.getElementById('btn-score');
const resultPlaceholder = document.getElementById('result');

// Creo un funzione che mi genera numeri casuali da un minimo ad un massimo prestabiliti
const getRandomNumber = (min , max) => {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
}
