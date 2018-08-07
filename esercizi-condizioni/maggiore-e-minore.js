/*
  Maggiore e minore
  Scrivi un programma che prenda quattro numeri in input, stampi in output il maggiore e il minore.
  http://www.imparareaprogrammare.it
*/

var a = 3;
var b = 7;
var c = 12;
var d = 2;

if (a > b && a > c && a > d){
  console.log(a);
} else if (b > a && b > c && b > d){
  console.log(b);
} else if (c > a && c > b && c > d){
  console.log(c);
} else if (d > a && d > b && d > c){
  console.log(d); 
}
if (a < b && a < c && a < d){
  console.log(a);
} else if (b < a && b < c && b < d){
  console.log(b);
} else if (c < a && c < b && c < d){
  console.log(c);
} else if (d < a && d < b && d < c) {
  console.log(d);
}
