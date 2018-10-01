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

//Definizione input dell'utente
var inputN = Number(prompt("inserisci primo numero"));
var inputM = Number(prompt("inserisci secondo numero"));

//Generazione e stampa della matriceNxM in base agli input
var matriceNxM = Array.from({length: inputN}, (v, i) =>
                    Array.from({length: inputM}, (v, i) =>
                        Math.floor(Math.random() * (max - min + 1)) + min));

console.log("Matrice" + inputN + "x" + inputM);
console.log(matriceNxM);

//Generazione e stampa dei nuovi array
var arrayR = [];
  //Somme di ogni riga
    for (i = 0; i < inputN; i++){
      arrayR[i] = 0;
      matriceNxM[i].forEach(function(numero){
        arrayR[i] += numero;
      });
    }

var arrayC = [];
  //Somme di ogni colonna
    for (i = 0; i < inputM; i++){
      arrayC[i] = 0;
      matriceNxM.forEach(function(element){
        arrayC[i] += element[i]
      });
    }

console.log("Array R (somma delle righe)");
console.log(arrayR);
console.log("Array C (somma delle colonne)");
console.log(arrayC);
