/*
  La bellezza della casualità
  Scrivi una funzione che prenda in input un numero e restituisca un numero casuale compreso tra 0 e l'argomento passato.
  http://www.imparareaprogrammare.it
*/


var min = 0;
var max = Number(prompt("Inserisci il numero massimo"));

function numeroCasuale (numero){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(numeroCasuale(max));
