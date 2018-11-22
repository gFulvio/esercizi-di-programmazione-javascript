/*
  Il genio delle date
  Scrivi una funzione che prenda in input due argomenti, il Giorno e il Mese. La funzione deve restituire il numero del giorno compreso tra 1 e 366.
    Input : 5, 2
    Output:
            36

  Hint: puoi definire un array con i giorni di ogni mese e ciclarlo.
  http://www.imparareaprogrammare.it
*/


function giornoMese (giorno, mese){
  arrayMesi = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  somma = 0;
  for (i = 0; i < mese - 1; i++){
    somma += arrayMesi[i];
  }
  return somma + giorno;
}

console.log(giornoMese(5, 2));
