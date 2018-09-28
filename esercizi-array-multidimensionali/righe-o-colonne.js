/*
  Righe o colonne?
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
    - Dichiari due array, l'array R di N elementi e l'array C di M elementi.
    - Salvi, nell'array R le somme di ogni riga della matrice e nell'array C le somme di tutte le colonne.
    - Stampi la matrice e le due array.

    Input :
      2 3
    Output:
      [
        [1, 50, 100],
        [1, 20, 40],
      ]

      Array R
        [152, 61]
      Array C
        [2, 70, 140]

  http://www.imparareaprogrammare.it
*/

//Definizione limiti dei numeri casuali
var min = 1;
var max = 100;
var somma = 0;
var sommaC0 = 0;
var sommaC1 = 0;
var sommaC2 = 0;

//Definizione input dell'utente
var inputN = Number(prompt("inserisci primo numero"));
var inputM = Number(prompt("inserisci secondo numero"));

//Generazione e stampa della matriceNxM in base agli input
var matriceNxM = Array.from({length: inputN}, (v, i) =>
                    Array.from({length: inputM}, (v, i) =>
                        Math.floor(Math.random() * (max - min + 1)) + min));

console.log("Matrice");
console.log(matriceNxM);

//Generazione e stampa dei nuovi array
var arrayR = [];
  //Somme di ogni riga
    for (i = 0; i < inputN; i++){
      somma = 0;
      matriceNxM[i].forEach(function(numero){
        somma += numero;
      });
      arrayR[i] = somma;
    }

var arrayC = [];
  //Somme di ogni colonna
  /*for (i = 0; i < inputN; i++){
    somma = 0;
    matriceNxM[i].forEach(function(index){
      somma += numero;
    });
    arrayC[i] = somma;
  }*/


    /*for (i = 0; i<inputN; i++){
      sommaC0 += matriceNxM[i][0];
      sommaC1 += matriceNxM[i][1];
      sommaC2 += matriceNxM[i][2];
    }

    arrayC[0] = sommaC0;
    arrayC[1] = sommaC1;
    arrayC[2] = sommaC2;*/

console.log("Array R");
console.log(arrayR);
console.log("Array C");
console.log(arrayC);
console.log("Array D");
console.log(arrayD);
