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

// Setto un timer che nasconda i numeri
setTimeout(hideNumbers, 5000);