/*
  Quanti anni ha?
  Scrivi un programma che prenda in input un anno di nascita e determini l'età della persona, calcola anche quanti anni sono necessari per raggiungere i 100. Stampa in output entrambi i risultati.
  http://www.imparareaprogrammare.it
*/

var birth = 1963;
var todayYear = 2018;
var hundred = 100;

var age = todayYear - birth;
var toHundred = hundred - age;

console.log(age);
console.log(toHundred);
