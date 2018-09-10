/*
  Tanti numeri
  Scrivi un programma che dato un insieme di valori in un array, calcolai la media dei valori e restituisca in output tutti i valori minori della media.
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.
  http://www.imparareaprogrammare.it
*/


var lista = [1,5,2,9,7,8];

var somma = 0;

for (i = 0; i < lista.length; i++){
  somma = somma + lista[i]
}

var media = somma/lista.length;

var filtroMin = lista.filter(function numeriMinori (numero) {
       return numero < media;
     });

//var filtroMin = lista.filter(ciccio => ciccoi < media)

var numeriMagg = lista.length - filtroMin.length

console.log("La media dei valori è " + media + " e i valori minori della media sono " + filtroMin);
console.log("Il numero dei valori minori della media è " + filtroMin.length);
console.log("Il numero dei valori maggiori della media è " + numeriMagg);
