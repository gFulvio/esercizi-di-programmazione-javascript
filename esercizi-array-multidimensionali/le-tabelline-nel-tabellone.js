/*
  Le tabelline nel tabellone
  Scrivi un programma che stampi il tabellone delle tabelline, da 0 a 10.
  In questo modo:
    x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0
    1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    2 | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20
    ...
    10 | 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100

  http://www.imparareaprogrammare.it
*/

var tabellone = [];
var toPrint = "";
var divisore = 10;

for (i = 0; i < 12; i++){
  if (i == 0){ //definisce la prima riga di tabellone
    tabellone[0] = ["x", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  } else { //definisce tutte le altre righe
        tabellone[i] = Array.from(tabellone[0], x => x * tabellone[0][i],);
        tabellone[i][0] = i - 1; //fa in modo che il primo elemento delle righe corrisponda alla tabellina
      }
  tabellone[i].forEach(function(element) { //inserisce il separatore | tra ogni elemento delle righe
    toPrint += element + " | ";
      });
  if(tabellone[i][11]%divisore == 0){ //va a capo a ogni multiplo di 10
    toPrint += "\n";
    }
};

  console.log(toPrint);
