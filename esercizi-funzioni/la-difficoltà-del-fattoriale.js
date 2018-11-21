/*
  La difficoltà del fattoriale
  Scrivi una funzione che calcoli in maniera iterativa (usando un ciclo) il fattoriale di un numero preso in input.
    Input : 5
    Output:
            120
  Hint: 5! = 5*4*3*2*1
  http://www.imparareaprogrammare.it
*/

var input = prompt("Calcola il fattoriale di ");
var output = 1;

function fattoriale (numero){
  for (i = numero; i > 0; i--){
    output *= i;
} return output;
}

console.log(fattoriale(input));
