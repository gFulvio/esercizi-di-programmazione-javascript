/*
  Sommali tutti
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
    - Stampi la matrice e la somma di tutti i valori contenuti.

    Input :
      2 3
    Output:
      [
        [1, 50, 100],
        [1, 20, 40],
      ]
      212

  http://www.imparareaprogrammare.it
*/

//variabili per definire i limiti dei numeri casuali
var min = 1;
var max = 100;

//variabile per calcolare la somma finale
var somma = 0;

//inserimento input da parte dell'utente
var inputN = Number(prompt("inserisci primo numero"));
var inputM = Number(prompt("inserisci secondo numero"));

//generazione e stampa della matrice
var matriceNxM = Array.from({length: inputN}, (v, i) =>
                    Array.from({length: inputM}, (v, i) =>
                        Math.floor(Math.random() * (max - min + 1)) + min));

console.log(matriceNxM);

//calcolo e stampa della somma dei numeri
for (i = 0; i < inputN; i++){
  matriceNxM[i].forEach(function(numero){
    somma += numero;
  });
}
console.log(somma);
