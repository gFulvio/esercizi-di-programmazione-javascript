/*
  Vinci tu!
  Scrivi un programma che simula un gioco di dadi tra due utenti, prendi in input il numero di quanti tiri effettuare per ciascun giocatore (N), dopodiché ogni utente tira N volte un dado a sei facce.
  Stampa il vincitore che ha totalizza più punti.
  http://www.imparareaprogrammare.it
*/

//Numero di tiri
var n = 3;

//Numeri sulle facce del dado
var min = 1;
var max = 6;

//Tiri del giocatore 1
console.log("Giocatore 1");
for (i = 0; i < n; i++){
  var random1 = Math.floor(Math.random() * (max - min + 1) + min)
  console.log(random1);
}

//Tiri del gicatore 2
console.log("Giocatore 2");
for (j = 0; j < n; j++){
  var random2 = Math.floor(Math.random() * (max - min + 1) + min)
  console.log(random2);
}

//Individuazione del vincitore
if (random1 > random2){
  console.log("Ha vinto il giocatore 1 con il numero " + random1);
} else {
  console.log("Ha vinto il giocatore 2 con il numero " + random2);
}
