/*
  Caldo o freddo
  Scrivi un programma che prenda in input sette valori relativi alle temperature della settimana e stabilisca la giornata più calda e quella più fredda.
  http://www.imparareaprogrammare.it
*/

var lun = 13;
var mar = 12;
var mer = 25;
var gio = 20;
var ven = 21;
var sab = 30;
var dom = 10;

var HotDay = "Giorno più caldo";
var ColdDay = "Giorno più freddo";

/* METODO CLASSICO
//Giornata più calda
if (lun > mar $$ lun > mer $$ lun > gio && lun > ven && lun > sab && lun > dom){
  HotDay = "Lunedì";
} else if (mar > lun $$ mar > mer $$ mar > gio && mar > ven && mar > sab && mar > dom){
  HotDay = "Martedì";
} else if (mer > lun $$ mer > mar $$ mer > gio && mer > ven && mer > sab && mer > dom){
  HotDay = "Mercoledì";
} else if (gio > lun $$ gio > mar $$ gio > mer && gio > ven && gio > sab && gio > dom){
  HotDay = "Giovedì";
} else if (ven > lun $$ ven > mar $$ ven > mer && ven > gio && ven > sab && ven > dom){
  HotDay = "Venerdì";
} else if (sab > lun $$ sab > mar $$ sab > mer && sab > gio && sab > ven && sab > dom){
  HotDay = "Sabato";
} else if (dom > lun $$ dom > mar $$ dom > mer && dom > gio && dom > ven && dom > dom){
  HotDay = "Domenica";
}

//Giornata più fredda
if (lun < mar $$ lun < mer $$ lun < gio && lun < ven && lun < sab && lun < dom){
  ColdDay = "Lunedì";
} else if (mar < lun $$ mar < mer $$ mar < gio && mar < ven && mar < sab && mar < dom){
  ColdDay = "Martedì";
} else if (mer < lun $$ mer < mar $$ mer < gio && mer < ven && mer < sab && mer < dom){
  ColdDay = "Mercoledì";
} else if (gio < lun $$ gio < mar $$ gio < mer && gio < ven && gio < sab && gio < dom){
  ColdDay = "Giovedì";
} else if (ven < lun $$ ven < mar $$ ven < mer && ven < gio && ven < sab && ven < dom){
  ColdDay = "Venerdì";
} else if (sab < lun $$ sab < mar $$ sab < mer && sab < gio && sab < ven && sab < dom){
  ColdDay = "Sabato";
} else if (dom < lun $$ dom < mar $$ dom < mer && dom < gio && dom < ven && dom < dom){
  ColdDay = "Domenica";
} */

//METODO ALTERNATIVO
  //Giornata calda
if (lun > Math.max(mar, mer, gio, ven, sab, dom)){
  HotDay = "Lunedì";
} else if (mar > Math.max(lun, mer, gio, ven, sab, dom)){
  HotDay = "Martedì";
} else if (mer > Math.max(lun, mar, gio, ven, sab, dom)){
  HotDay = "Mercoledì";
} else if (gio > Math.max(lun, mar, mer, ven, sab, dom)){
  HotDay = "Giovedì";
} else if (ven > Math.max(lun, mar, mer, gio, sab, dom)){
  HotDay = "Venerdì";
} else if (sab > Math.max(lun, mar, mer, gio, ven, dom)){
  HotDay = "Sabato";
} else if (dom > Math.max(lun, mar, mer, gio, ven, sab)){
  HotDay = "Domenica";
}
  //Giornata fredda
if (lun < Math.min(mar, mer, gio, ven, sab, dom)){
  ColdDay = "Lunedì";
} else if (mar < Math.min(lun, mer, gio, ven, sab, dom)){
  ColdDay = "Martedì";
} else if (mer < Math.min(lun, mar, gio, ven, sab, dom)){
  ColdDay = "Mercoledì";
} else if (gio < Math.min(lun, mar, mer, ven, sab, dom)){
  ColdDay = "Giovedì";
} else if (ven < Math.min(lun, mar, mer, gio, sab, dom)){
  ColdDay = "Venerdì";
} else if (sab < Math.min(lun, mar, mer, gio, ven, dom)){
  ColdDay = "Sabato";
} else if (dom < Math.min(lun, mar, mer, gio, ven, sab)){
  ColdDay = "Domenica";
}

//Risultato
console.log(`La giornata più calda della settimana è stata quelle di ${HotDay} mentre quella più fredda è stata quella di ${ColdDay}`);
