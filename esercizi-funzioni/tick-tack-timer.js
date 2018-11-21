/*
  Tick, tack, timer!
  Scrivi un programma che dato un numero in input, stampi il conto alla rovescia a partire dal numero acquisito.
    Input : 5
    Output:
            4
            3
            2
            1
            0
  http://www.imparareaprogrammare.it
*/

function contoAllarovescia (numero){
  for (i = numero; i >= 0; i--){
    console.log(i);
  }
}

console.log(contoAllarovescia(prompt("Conto alla rovescia a partire da ")));
