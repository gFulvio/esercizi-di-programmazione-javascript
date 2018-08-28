/*
  Chi l'azzecca?
  Scrivi un programma che generi un numero casuale compreso tra 1 e 100 (zero escluso).
  Successivamente prendi in input altri due numeri di due ipotetici utenti, e comunica se uno dei due ha azzeccato il numero casuale, in caso contrario quale dei due si è avvicinato di più al numero.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/

var min = 1;
var max = 100;
var random = Math.floor(Math.random() * (max - min + 1)) + min;

var player1 = 12;
var player2 = 35;

if (player1 == random){
  console.log("Player1 ha azzeccato! Il numero è " + random);
} else if (player2 == random){
  console.log("Player2 ha azzeccato! Il numero è " + random);
} else {
  console.log("Avete sbagliato, il numero esatto è " + random);
}
