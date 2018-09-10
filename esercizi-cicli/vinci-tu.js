/*
  Vinci tu!
  Scrivi un programma che simula un gioco di dadi tra due utenti, prendi in input il numero di quanti tiri effettuare per ciascun giocatore (N), dopodiché ogni utente tira N volte un dado a sei facce.
  Stampa il vincitore che ha totalizza più punti.
  http://www.imparareaprogrammare.it
*/

console.log("Il gioco dei dadi, tre tiri per ciascun giocatore!");

var giocatore1 = prompt("Giocatore 1 inserisci il tuo nome");
var giocatore2 = prompt("Giocatore 2 inserisci il tuo nome");

//Numero di tiri
var n = 3;

//Numeri sulle facce del dado
var min = 1;
var max = 6;

//Totale dei tiri di ciascun giocatore
var totaleGiocatore1 = 0;
var totaleGiocatore2 = 0;

//Tiri del giocatore 1
console.log("Inizia " + giocatore1);
for (i = 1; i <= n; i++){
  var lancio1 = prompt(`${giocatore1} premi INVIO per il lancio numero ${i}`, 1);
  var tiroGiocatore1 = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(`Tiro n. ${i} = ${tiroGiocatore1}`);
  totaleGiocatore1 += tiroGiocatore1;
}
console.log("Il totale di " + giocatore1 + " è " + totaleGiocatore1);

//Tiri del gicatore 2
console.log("Adesso tocca a " + giocatore2);
for (j = 1; j <= n; j++){
  var lancio2 = prompt(`${giocatore2} premi INVIO per il lancio numero ${j}`, 2);
  var tiroGiocatore2 = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(`Tiro n. ${j} = ${tiroGiocatore2}`);
  totaleGiocatore2 += tiroGiocatore2;
}
console.log("Il totale di " + giocatore2 + " è " + totaleGiocatore2);

//Individuazione del vincitore
if (totaleGiocatore1 > totaleGiocatore2){
  console.log("Ha vinto " + giocatore1 + " con il numero " + totaleGiocatore1);
} else {
  console.log("Ha vinto " + giocatore2 + " con il numero " + totaleGiocatore2);
}
