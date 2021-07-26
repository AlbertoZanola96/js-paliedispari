// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var pdGiocatore = prompt("Inserire pari o dispari");
console.log(pdGiocatore);

var numGiocatore = parseInt(prompt("inserire un numero da 1 a 5"));
console.log(numGiocatore);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var numPc = random(1, 5);
console.log(numPc);



// Sommiamo i due numeri
var somma = numGiocatore + numPc;
console.log("la somma dei numeri risulta: " + somma);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
function pariDispari(num) {
    if (num % 2 == 0) {
        console.log("Vince Pari!");
    } else {
        console.log("Vince Dispari!");
    }
}

var vincitore = pariDispari(somma);
