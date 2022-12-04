/*
PALINDROMA
Chiedere all’utente di inserire una parola:
    Creare una funzione per capire se la parola inserita è palindroma
*/

const userWord = prompt('Inserisci una parola');
console.log(userWord);


const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
const deleteSpaces = /\s/g;



//Funzione che giri al contrario la parola
function reverseWord(word) {

    let turned = '';
    let getUserWord = word.toLowerCase().trim().replace(regex,'').replace(deleteSpaces,'');
    console.log(getUserWord);

    for (let i = getUserWord.length - 1; i >= 0; i--) {
        console.log(getUserWord.charAt(i));
        turned += getUserWord.charAt(i);
    }

return turned;
    
}
 //Funzione per controllare che la parola inserita dall'utente sia palindroma
function isPalindrome(word) {
    if (word === reverseWord(word)) {
        return 'La parola è palindroma';
    }

    return 'La parola non è palindroma';
}

console.log(isPalindrome(userWord));

