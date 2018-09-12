/*
  Metti un po' d'ordine
  Scrivi un programma che data un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Variante
  Prova ad ordinali in modo crescente.
  http://www.imparareaprogrammare.it
*/


var array1 = [37, 55, 1, 92, 70, 12, 42, 28, 23, 32];
array1.sort(function compareNumbers(a, b) {
  return b - a;
});
console.log(array1);

//Variante
var array2 = [37, 55, 1, 92, 70, 12, 42, 28, 23, 32];
array2.sort(function compareNumbers(a, b) {
  return a - b;
});
console.log(array2);
