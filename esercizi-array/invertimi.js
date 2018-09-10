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

console.log(serieN);

for (i = serieN.length-1; i >= 0; i--){
  stringToPrint += serieN[i] + " "
}
console.log(stringToPrint);
