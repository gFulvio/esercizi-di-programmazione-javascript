/*
  Rincorri la decina
  Scrivi un programma che che stampi i numeri da 1 a 100 andando a capo ogni 10.
  Hint: per andare a capo stampa '\n'.
  http://www.imparareaprogrammare.it
*/

var divisore = 10;
var stringToPrint = "";

for(i=1;i<100;i++){
  stringToPrint += i + " ";

  if(i%divisore==0){
    stringToPrint += '\n';
  }
}
console.log(stringToPrint);
