/*
Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
Dichiariamo chi ha vinto.
*/

const userChoice = prompt('Odd or Even').toLowerCase().trim();
console.log('User chose ' + userChoice);

let userNumber = 0;

//Continuiamo a chiedere all'utente il numero finchè non inserisce un valore compreso tra 1 e 5
while (userNumber < 1 || userNumber > 5) {
    userNumber =  parseInt(prompt('Enter a number between 1 and 5'));
}
console.log('User chose ' + userNumber);

//Funzione per generare numero random con math.random (genera un numero casuale tra numMin e nunMax, inclusi)
function getRandomNumberInterval(numMin, numMax) {
    const randomNumber = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
    return randomNumber;
}

let computerNumber = getRandomNumberInterval(1,5);
console.log('Computer chose ' + computerNumber);

function sum (num1, num2) {
    let result = num1 + num2;
    return result;
}

let result = sum(userNumber, computerNumber );
console.log('Sum between user number and computer number is ' + result);

function oddOrEven(num) {
    if (num % 2 === 0) {
        return 'pari'
    }
    return 'dispari'
} 

const winner = oddOrEven(result);
console.log(winner);

if (userChoice == oddOrEven(result) ) {
    console.log('Player wins');
} else {
    console.log('Computer win');
}
