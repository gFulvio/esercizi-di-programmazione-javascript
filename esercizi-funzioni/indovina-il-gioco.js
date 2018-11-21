/*
  Indovina il giorno
  Scrivi un programma con due funzioni, la prima prende in ingresso un intero e verifichs se sia compreso nel range da 1 a 7.
  Se è compreso, la funzione restituirà TRUE, se non è compreso restituirà FALSE.

  Scrivi una seconda funzione che, in caso la prima restituisca TRUE, visualizzi il giorno della settimana corrispondente considerando la seguente corrispondenza:
        1 = Lunedì
        ...
        7 = Domenica

  Nel caso il giorno non sia compreso nel range, il programma dovrà restituire un messaggio d'errore simile a questo: 'Peccato, non posso indovinare il giorno.'
  http://www.imparareaprogrammare.it
*/

var input = Number(prompt("Inserisci un numero "))

function verificaIlNumero (numero){
  if (numero >= 1 && numero <= 7){
    return true;
  }
    return false;
}

function verificaIlGiorno (giorno){
  if (verificaIlNumero(giorno) === true){
    console.log(verificaIlNumero(giorno));
  switch (giorno) {
    case 1:
    console.log("Lunedì");
    break;
    case 2:
    console.log("Martedì");
    break;
    case 3:
    console.log("Mercoledì");
    break;
    case 4:
    console.log("Giovedì");
    break;
    case 5:
    console.log("Venerdì");
    break;
    case 6:
    console.log("Sabato");
    break;
    case 7:
    console.log("Domenica");
    break;
  }
} else {
  console.log("Peccato, non posso indovinare il giorno");
};
}

console.log(verificaIlGiorno(input));
