/*
  La calcolatrice
  Scrivi un programma che prenda tre input:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Le operazioni supportate sono le suguenti:
    somma => +
    sottrazione => -
    moltiplicazione => *
    divisione => /
    modulo (solo tra interi) => %
    potenza => ^
    media => m
  Utilizza il costrutto Switch-Case mediante acquisizione di caratteri.
  http://www.imparareaprogrammare.it
*/

var num1 = 30;
var num2 = 25;
var operazione = "^";
var risultato = 0;

switch (operazione){
  case "+":
    risultato = num1 + num2;
    console.log(`la somma tra ${num1} e ${num2} fa ${risultato}`);
    break;
  case "-":
    risultato = num1 - num2;
    console.log(`la differenza tra ${num1} e ${num2} fa ${risultato}`);
    break;
  case "*":
    risultato = num1 * num2;
    console.log(`la moltiplicazione tra ${num1} e ${num2} fa ${risultato}`);
    break;
  case "/":
    risultato = num1 / num2
    console.log(`la divisione tra ${num1} e ${num2} fa ${risultato}`);
    break
  case "%":
    risultato = num1%num2
    console.log(`il resto della divisione tra ${num1} e ${num2} è ${risultato}`);
    break;
  case "^":
    risultato = Math.pow(num1, num2)
    console.log(`${num1} elevato a ${num2} fa ${risultato}`);
    break;
  case "m":
   risultato = (num1 + num2)/2;
   console.log(`la media tra ${num1} e ${num2} fa ${risultato}`);
   break;
}
