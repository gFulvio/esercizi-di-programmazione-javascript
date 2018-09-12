/*
  Operazioni tra array
  Scrivi un programma che dichiari 2 array di 10 elementi interi e li riempia con numeri casuali da 1 a 10.
  Il programma prende in input dall'utente il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Ed esegue il calcolo tra ogni elemento dei due array salvando ciascun risultato in un terzo array di appoggio.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/

//Definizione degli array con numeri casuali;
var min = 1;
var max = 10;

var array1 = Array.from({length: 10}, (v, i) => Math.floor(Math.random() * (max - min + 1)) + min);
console.log(array1);

var array2 = Array.from({length: 10}, (v, i) => Math.floor(Math.random() * (max - min + 1)) + min);
console.log(array2);

//Dichiarazione e definizione variabili operazione e risultato
var operazione = prompt("Inserisci un operatore aritmetico");
var arrayOperazione = 0;

//Applicazione operazione scelta
switch (operazione){
  case "+":
    for (i = 0; i <= 10; i++){
      arrayOperazione = Array.from({length: 10}, (v, i) => array1[i]+array2[i]);
    };
      console.log(`la somma tra array1 e array2 fa ${arrayOperazione}`);
  break;
  case "-":
    for (i = 0; i <= 10; i++){
      arrayOperazione = Array.from({length: 10}, (v, i) => array1[i]-array2[i]);
    };
    console.log(`la differenza tra array1 e array2 fa ${arrayOperazione}`);
  break;
  case "*":
    for (i = 0; i <= 10; i++){
      arrayOperazione = Array.from({length: 10}, (v, i) => array1[i]*array2[i]);
    };
    console.log(`la moltiplicazione tra array1 e array2 fa ${arrayOperazione}`);
  break;
  case "/":
    for (i = 0; i <= 10; i++){
      arrayOperazione = Array.from({length: 10}, (v, i) => array1[i]/array2[i]);
    };
    console.log(`la divisione tra array1 e array2 fa ${arrayOperazione}`);
  break;
  }
