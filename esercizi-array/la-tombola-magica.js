/*
  La tombola magica
  Scrivi un programma che dichiari un array di 5 elementi e vi inserisca casualmente i valori da 1 a 90 senza ripetizioni.
  Permetti all’utente di effettuare una partita scegliendo 5 numeri a suo piacimento e verifica quanti sono presenti nella array principale, restituisci un risultato del tipo:
    1 numero uguale => estratto
    2 numeri uguali => ambo
    3 numeri uguali => terno
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
  In caso di vittoria dovrà essere stampato un messaggio adeguato a tua scelta, in caso di perdina dovrà essere concesso un nuovo tentativo senza una nuova estrazione.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/


var start = prompt("Scrivi OK per cominciare");
var min = 1;
var max = 99;

//INIZIO PARTITA: IF SENZA ELSE PER FAR INIZIARE IL GIOCO
if (start == "OK"){

  //ESTRAZIONE TOMBOLA
  var listaTombola = Array.from({length: 5}, (v, i) => Math.floor(Math.random() * (max - min + 1)) + min);

  //CICLO DO WHILE PER SCEGLIERE I NUMERI E RITENTARE SE SI SBAGLIA
  do{
    var listaUtente = Array.from({length: 5}, (v, i) => Number(prompt("Inserisci numero")));
    console.log("I numeri che hai scelto sono " + listaUtente);
    console.log("Estrazione... ");

    //CONFRONTO TRA NUMERI SCELTI E NUMERI ESTRATTI
    console.log("Confronto... ");

    var confronto = listaTombola.filter(function confrontaTombola (elemento) {
      return listaUtente.includes(elemento);
      });

    // RISULTATO
    switch (confronto.length){
      case 0:
      console.log("Nessuno dei numeri che hai scelto è stato estratto, ritenta!");
      break;
      case 1:
      console.log("Uno dei numeri scelti è stato estratto! " + confronto);
      break;
      case 2:
      console.log("Ambo! " + confronto);
      break;
      case 3:
      console.log("Terno! " + confronto);
      break;
      case 4:
      console.log("Quaterna! " + confronto);
      break;
      case 5:
      console.log("Cinquina!" + confronto);
      break;
      }
  } while (confronto.length == 0);
}
