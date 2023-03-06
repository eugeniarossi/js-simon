'use strict';

/**********
 * Functions
 */

function pushNotIncluded(myArray, myNumber) {
    if (!myArray.includes(myNumber)) {
        myArray.push(myNumber);
    }
}

function generateRandomNums(arrayLength, min, max) {
    let randomNumsArray = [];
    while (randomNumsArray.length < arrayLength) {
        const generatedNumber = Math.floor(Math.random() * max) + min;
        pushNotIncluded(randomNumsArray, generatedNumber);
    }
    return randomNumsArray;
}

function hideNumbers() {
    p.innerText = '';
}

function guessNumbers() {  
    do {
        const input = Number(prompt(`Inserisci un numero (${userNumbers.length + 1})`));
        pushNotIncluded(userNumbers, input);
    } while (userNumbers.length < 5);

    console.log(userNumbers);

    let guessedNumbers = [];
    for (let i = 0; i < randomNumbers.length; i++) {
        if (randomNumbers[i] === userNumbers[i]) {
            guessedNumbers.push(userNumbers[i]);
        } 
    }
    console.log(`Hai indovinato ${guessedNumbers.length} numeri: ${guessedNumbers}`);
}

/**********
 * Main
 */

// Salvo p in una variabile
let p = document.querySelector('p');

// Genero 5 numeri random e li salvo in un array
let randomNumbers = generateRandomNums(5, 1, 100);
console.log({randomNumbers});

// Mostro i numeri in pagina
p.innerText = randomNumbers;

let userNumbers = [];

// Setto un timer che nasconda i numeri
setTimeout(hideNumbers, 3000);
// Setto un timer per il prompt
setTimeout(guessNumbers, 3100);



