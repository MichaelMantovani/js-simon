console.log('JS OK')

// OPERAZIONI PRELIMINARI

// Recupero gli elementi dal DOM
const countdownPlaceholder = document.getElementById('countdown');
const gameDisplay = document.getElementById('game-display')
const gameModeInput = document.getElementById('game-mode');
const playButton = document.getElementById('play-btn')
const toGuessNumbers = document.getElementById('to-guess-number');
const guessNumbers = document.getElementById('guess-number');
const guessInput = document.getElementById('guess-input');
const scoreButton = document.getElementById('btn-score');
const resultPlaceholder = document.getElementById('result');

// Creo un funzione che mi genera numeri casuali da un minimo ad un massimo prestabiliti
const getRandomNumber = (min , max) => {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
}

// Creo una funzione che crea un input
const createInput = (inputNumber) => {
    const input = document.createElement('input');
    input.placeholder = `Inserisci qui il ${inputNumber}° numero`;
    return input;
}

// Creo una funzione che rimuove la classe 'd-none'
const removeDNone = (domElement) => {
    domElement.classList.remove('d-none')
}

// Creo una funzione che aggiunge la classe 'd-none'
const addDNone = (domElement) => {
    domElement.classList.add('d-none')
}


// LOGICA DI GIOCO

// AL CLICK di un bottone inizia il gioco
playButton.addEventListener('click', () => {
    
    toGuessNumbers.innerText = '';
    addDNone(gameDisplay)
    

    // Recuperola difficoltà selezionata
    const gameMode = gameModeInput.value
    let numbersTot = 5 
    if (gameMode === 'medium') {
        numbersTot = 10
    } else if  (gameMode === 'hard') {
        numbersTot = 15
    } else if (gameMode === 'ultra-nightmare') {
        numbersTot = 30
    }
    

    toGuessNumbers.classList.remove('d-none')
    countdownPlaceholder.classList.remove('d-none')
    // Genero tramite la funzione i numeri 
    let numbers = [];
    let createdNumber;
    while (numbers.length < numbersTot) {
        
        do {
            createdNumber = getRandomNumber(1,50);
        }
        while (numbers.includes(createdNumber)) {
            numbers.push(createdNumber);
            console.log(createdNumber)
        }
    }
        toGuessNumbers.innerText = numbers;

        // Creo un contatore che parte da 30 e diminuisce di 1 ogni secondo
        let countdownSeconds = 30
        const countdown = setInterval(() => {
            countdownPlaceholder.innerText = 'Memorizza i numeri in'+ ' ' + --countdownSeconds;
            
            // SE il contatore arriva a zero 
            if (countdownSeconds === 0) {
                clearInterval(countdown);
                setTimeout(()=>{
                    addDNone(countdownPlaceholder)
                    addDNone(toGuessNumbers)
                    addDNone(gameDisplay)
                    removeDNone(guessNumbers)
                    removeDNone(guessInput)
                    removeDNone(guescoreButtossNumbers)
                    countdownPlaceholder.innerText = 'TEMPO SCADUTO'
                  }, 1000);
            } 
        }, 1000);
})


scoreButton.addEventListener('clicl', () => {
    const guessNumber = parseInt(guessInput.value);
    
})

