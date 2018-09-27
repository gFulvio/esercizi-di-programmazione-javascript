/*
  Procedi alla cieca
  Scrivi un programma che stampi il contenuto di una matrice i cui valori interi sono generati casualmente nel range di 0 e 100.

  http://www.imparareaprogrammare.it
*/

var min = 0;
var max = 100;

var matrix = [];

for (i = 0; i < 101; i++){
  matrix[i] = Array.from({length: 100}, (v, i) => Math.floor(Math.random() * (max - min + 1)) + min);
}

console.log(matrix);
