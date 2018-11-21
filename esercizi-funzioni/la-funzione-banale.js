/*
  La funzione banale
  Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca 'Vero' se i due argomenti sono identici, altrimenti 'Falso'.
  http://www.imparareaprogrammare.it
*/


function verofalso (primo, secondo){
    if (primo === secondo){
      return true;
    } else {
      return false;
    }
}

console.log(verofalso('marco', 'antonio'));
