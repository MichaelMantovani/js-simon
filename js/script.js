console.log('JS OK')

// OPERAZIONI PRELIMINARI

// Recupero gli elementi dal DOM
const countdownPlaceholder = document.getElementById('countdown');
const playButton = document.getElementById('play-btn')
const toGuessNumbers = document.getElementById('to-guess-number');
const userGuessForm = document.getElementById('user-guess-number')
const userGuessInputs = document.querySelectorAll('input')
const scoreButton = document.getElementById('btn-score');
const resultPlaceholder = document.getElementById('result');

// Creo un funzione che mi genera numeri casuali da un minimo ad un massimo prestabiliti
const getRandomNumber = (min , max) => {
    const randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
    return randomNumber;
}


// Creo una funzione che rimuove la classe 'd-none'
const removeDNone = (domElement) => {
    domElement.classList.remove('d-none')
}

// Creo una funzione che aggiunge la classe 'd-none'
const addDNone = (domElement) => {
    domElement.classList.add('d-none')
}

// Creo le costanti di cui ho bisogno
const min = 1;
const max = 50;
const numbersTot = 5;
let countdownSeconds = 30 ;


// LOGICA DI GIOCO

// AL CLICK di un bottone inizia il gioco
const numbers = [];
playButton.addEventListener('click', () => {
    toGuessNumbers.innerText = '';
    addDNone(playButton)
    toGuessNumbers.classList.remove('d-none')
    countdownPlaceholder.classList.remove('d-none')
    // Genero tramite la funzione i numeri 
    
    let createdNumber;
    while (numbers.length < numbersTot) {
        
        createdNumber = getRandomNumber(min,max);
        
        if( !numbers.includes(createdNumber) ) {
            numbers.push(createdNumber);
        }
      }

    // Stampo i numeri in pagina
    let guessNumbers = ''

    for (let i = 0; i < numbers.length; i++) {
        guessNumbers += `<li>${numbers[i]}</li>`
    }
    
    toGuessNumbers.innerHTML = guessNumbers;

        // Creo un contatore che parte da 30 e diminuisce di 1 ogni secondo
        countdownPlaceholder.innerText = 'Memorizza i numeri in'+ ' ' + countdownSeconds;

        const countdown = setInterval(() => {
        countdownPlaceholder.innerText = 'Memorizza i numeri in'+ ' ' + --countdownSeconds;
            
            // SE il contatore arriva a zero 
            if (countdownSeconds === 0) {
                clearInterval(countdown);
                setTimeout(()=>{
                    addDNone(playButton)
                    addDNone(countdownPlaceholder)
                    addDNone(toGuessNumbers)
                    removeDNone(userGuessForm)
                  }, 200);
            } 
        }, 1000); 
})

// Al submit del form recupero i valori e controllo che siano validi
userGuessForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const userGuess = []
   for (let i = 0; i < userGuessInputs.length; i++) {
    const userNumber = parseInt(userGuessInputs[i].value)
    
    // Validazione dei numeri scritti dall'utente
    if (!userGuess.includes(userNumber) && userNumber >= min && userNumber <= max && !isNaN(userNumber)) userGuess.push(userNumber);
   }
   
   if (userGuess.length  !== numbers.length) {
    alert('Alcuni dati inseriti non sono validi');
    return;
   }
   

//    Controllo quante risposte giuste ci sono
   const correctUserAnswers = []
   for (let i = 0; i < userGuess.length; i++) {
    if (numbers.includes(userGuess[i])) correctUserAnswers.push(userGuess[i])
   }
   

//    In base alle risposte giuste scrivo un messaggio 
    let resultMessagge = `Hai indovinato ${correctUserAnswers.length} numero. Il numero che hai indovinato è ${correctUserAnswers}.`
    if(correctUserAnswers.length > 1 ) resultMessagge = `Hai indovinato ${correctUserAnswers.length} numeri. I numeri che hai indovinato sono ${correctUserAnswers}` 

    resultPlaceholder.innerText = resultMessagge
})


