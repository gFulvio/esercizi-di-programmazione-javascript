/*
  Fai il professore
  Scrivi un programma che converte un voto numerico in un giudizio seguendo questi parametri:
    v < 18:  insufficiente
    18 < = v <21:  sufficiente
    21 < = v <24:  buono
    24 < = v <27:  distinto
    27 < = v <29:  ottimo
    v = 30:  eccellente
  Utilizza costrutto If.

  Variante
  Realizzare una versione con il costrutto Switch-Case.
  http://www.imparareaprogrammare.it
*/

var v = prompt("Inserisci un voto");

/*if (v < 18){
  console.log("insufficiente");
} else if (18 <= v && v < 21){
  console.log("sufficiente");
} else if (21 <= v && v < 24){
  console.log("buono");
} else if (24 <= v && v < 27){
  console.log("distinto");
} else if (27 <= v && v < 29){
  console.log("ottimo");
} else if (v == 30){
  console.log("eccellente");
}*/

switch (true){
  case (v < 18):
    console.log("insufficiente");
    break;
  case (v >= 18) && (v < 21):
    console.log("sufficiente");
    break;
  case (v >= 21) && (v < 24):
    console.log("buono");
    break;
  case (v >= 24) && (v < 27):
    console.log("distinto");
    break;
  case (v >= 27) && (v <= 29):
    console.log("ottimo");
    break;
  case (v == 30):
    console.log("eccellente");
    break;
}
