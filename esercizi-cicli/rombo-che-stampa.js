/*
  Rombo che stampa!
  Scrivi un programma che riceva in input un numero dispari e stampi un rombo di lettere partendo dal valore, in questo modo:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X
  Hint: per indentare puoi usare il tab con '\t'.
  http://www.imparareaprogrammare.it
*/

var input = prompt("Inserisci un numero dispari");
var stringToPrint = "X";
var tab = " ";

if (input%2 != 0){
  for (i = 1; i <= input; i+=2){
    console.log(tab.repeat(input-i) + stringToPrint.repeat(i));
  }
  for (j = input - 2; j >= 1; j-=2){
    console.log(tab.repeat(input-j) + stringToPrint.repeat(j));
  }
} else {
  console.log("Il numero inserito non è dispari, inserire numero dispari.");
}
