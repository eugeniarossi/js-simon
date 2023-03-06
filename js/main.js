'use strict';

/**********
 * Functions
 */

// Funzione per aggiungere numeri ad un array senza ripetizioni 
function pushNotIncluded(myArray, myNumber) {
    if (!myArray.includes(myNumber)) {
        myArray.push(myNumber);
    }
}

// Funzione per generare numeri random e salvarli in un array senza ripetizioni
function generateRandomNums(arrayLength, min, max) {
    let randomNumsArray = [];
    while (randomNumsArray.length < arrayLength) {
        const generatedNumber = Math.floor(Math.random() * max) + min;
        pushNotIncluded(randomNumsArray, generatedNumber);
    }
    return randomNumsArray;
}

// Funzione per nascondere i numeri random
function hideNumbers() {
    for (let i = 0; i < liElements.length; i++) {
        liElements[i].classList.add('remove');
    } 
}

// Funzione che chiede i numeri all'utente, li confronta. Stampa quanti e quali numeri sono stati indovinati.
function guessNumbers() {  
    let userNumbers = [];
    do {
        const input = Number(prompt(`Inserisci un numero (${userNumbers.length + 1})`));
        pushNotIncluded(userNumbers, input);
    } while (userNumbers.length < 5);
    console.log(userNumbers);
    
    let correctNumbers = [];
    for (let i = 0; i < liElements.length; i++) {
        if (randomNumbers[i] === userNumbers[i]) {
            correctNumbers.push(userNumbers[i]);
        } else {
            liElements[i].classList.add('wrong');
        }
        liElements[i].classList.remove('remove');
    }
    console.log(`Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers}`);
}

// Funzione per creare elementi della lista e aggiungerli a ul
function myCreateElements() {
    for (let i = 0; i < randomNumbers.length; i++) {
        const li = document.createElement('li');
        li.innerText = randomNumbers[i];
        fragment.append(li);
    }
    ul.append(fragment);
    return ul;
}

/**********
 * Main
 */

// Salvo gli li in una variabile
const ul = document.querySelector('ul');
const fragment = document.createDocumentFragment();

// Genero 5 numeri random e li salvo in un array
let randomNumbers = generateRandomNums(5, 1, 99);
// Stampo i numeri random in console
console.log({randomNumbers});
// Creo gli li e stampo i numeri random
const newElements = myCreateElements();
// Seleziono tutti gli li
const liElements = document.querySelectorAll('li');

// Setto un timer che nasconda i numeri
setTimeout(hideNumbers, 3000);
// Setto un timer per la funzione guessNumbers
setTimeout(guessNumbers, 3100);