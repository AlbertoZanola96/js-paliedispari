// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var pdGiocatore = prompt("Inserire pari o dispari");
console.log(pdGiocatore);

var numGiocatore = parseInt(prompt("inserire un numero da 1 a 5"));
console.log(numGiocatore);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numCasuale() {
    var numPc = Math.floor(Math.random() * 5) + 1;
    console.log(numPc);  
}



// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.