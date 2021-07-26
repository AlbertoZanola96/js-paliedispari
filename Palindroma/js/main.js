// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
var parola = prompt("inserire una parola").toLowerCase();

var parolaDiv = parolaInversa(parola);

if (parola == parolaDiv) 
{ 
    console.log('è palindroma');
} 
else 
{
    console.log('non è palindroma');
}
  
function parolaInversa(stringa) 
{
  var stringaInversa = stringa.split('').reverse().join('');  
  return stringaInversa;
}













