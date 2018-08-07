/*
  Menu dei dolci
  Scrivi un programma stampi il seguente menu:
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia
  Inoltre, prenda in input il valore numerico della scelta.
  Se la scelta non è tra quelle elencate verrà stampata la scritta 'Dolce non disponibile' altrimenti verrà visualizzata la scelta effettuata 'Hai scelto il dolce X'.
  http://www.imparareaprogrammare.it
*/

var a = 'Tiramisù';
var b = 'Torta della nonna';
var c = 'Cheescake alla nutella';
var d = 'Macedonia';

var scelta = 3;

var e = 'Hai scelto il dolce '
var f = 'Dolce non disponibile'

console.log('MENU');
console.log('1. ' + a);
console.log('2. ' + b);
console.log('3. ' + c);
console.log('4. ' + d);

switch (scelta) {
  case 1:
    console.log(e + a);
    break;
  case 2:
    console.log(e + b);
  break;
  case 3:
    console.log(e + c);
    break;
  case 4:
    console.log(e + d);
    break;
  default:
    console.log(f);
}
