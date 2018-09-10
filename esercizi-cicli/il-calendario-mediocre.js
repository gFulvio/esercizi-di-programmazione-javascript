/*
  Il calendario mediocre
  Scrivi un programma che stampi il calendario di un mese, ricevi in input:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)

  Variante
  Piuttosto che passarein input i giorni del mese passa direttamente il mese e calcola tu i giorni corrispondenti.
  http://www.imparareaprogrammare.it
*/

var mese = "Aprile";
var numeroGiorni = 0;
var numeroGiorno = 2;
var giorno = "";

if (mese == "Novembre" || mese == "Aprile" || mese == "Giugno" || mese == "Settembre"){
  numeroGiorni = 30;
} else if (mese == "Febbraio"){
  numeroGiorni = 28;
} else {
  numeroGiorni = 31;
}

for (i = 1; i < numeroGiorni + 1; i++){

  switch (numeroGiorno){
    case 0:
      giorno = "Lunedì";
      break;
    case 1:
      giorno = "Martedì";
      break;
    case 2:
      giorno = "Mercoledì";
      break;
    case 3:
      giorno = "Giovedì";
      break;
    case 4:
      giorno = "Venerdì";
      break;
    case 5:
      giorno = "Sabato";
      break;
    case 6:
      giorno = "Domenica";
      numeroGiorno = - 1;
      break;
  }
    console.log(mese + " " + i + " " + giorno);

    numeroGiorno += 1;

}
