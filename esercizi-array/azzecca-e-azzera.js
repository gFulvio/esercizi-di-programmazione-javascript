/*
  Azzecca e azzera
  Scrivi un programma che dichiari un array di 100 elementi interi e lo riempia con numeri casuali da 1 a 50.
  Permetti all'utente di inserire una serie di numeri e azzera tutti i numeri nell'array principale che contengono un multiplo del numero inserito.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/

//Generazione array con 100 numeri casuali
var min = 1;
var max = 50;

var array1 = Array.from({length: 100}, (v, i) => Math.floor(Math.random() * (max - min + 1)) + min);

console.log(array1);

var input = Number(prompt("inserisci numero"));

//Input dell'utente
/*function diversoDaZero(elemento) {
  return elemento != 0;
}

do{

  console.log(input);

  for (i=0 ; i<= array1.length; i++){
  if (array1[i]%input == 0){
    array1[i] = 0;
  }
 }

 console.log(array1);
} while (array1.every(diversoDaZero) == true);*/


var map = array1.map(x => x/input);

console.log(map);
