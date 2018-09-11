/*
  Invertimi
  Scrivi un programma che prenda in input un numero N generi una serie di N numeri all'interno di un array, stampa la serie di numeri ma invertendola.

  Variente
  Non utilizzare array di appoggio per inversione.
  http://www.imparareaprogrammare.it
*/

var numeroN = prompt("inserire numero");

var stringToPrint= "";

var serieN = Array.from({length: numeroN}, (v, i) => i);
/*
OPPURE

var min = 1;
var max = 100;
var serieN = Array.from({length: numeroN}, (v, i) => Math.floor(Math.random() * (max - min + 1)) + min);
*/

console.log(serieN);

var invertimi = serieN.reverse();
console.log('inversione: ', invertimi);


/*
ALTERNATIVO

for (i = serieN.length-1; i >= 0; i--){
  stringToPrint += serieN[i];
}
console.log(stringToPrint);

console.log(Array.from(stringToPrint));
*/
