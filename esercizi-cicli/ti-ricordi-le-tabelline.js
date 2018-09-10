/*
  Ti ricordi le tabelline?
  Scrivi un programma che stampi che prenda in input un numero e stampi la tabellina corrispondente.
  http://www.imparareaprogrammare.it
*/

var input = 3;
var stringToPrint = ""

for (i = 1; i < 11; i++){
  stringToPrint += input*i + " ";
}
console.log(stringToPrint);
