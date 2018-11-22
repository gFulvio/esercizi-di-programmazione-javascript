/*
  La funzione che sembra difficile
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.
    Input : 123456, 3
    Output:
            4
  http://www.imparareaprogrammare.it
*/

function dueNumeri (n, k){
  arrayN = Array.from(n.toString());
  arrayRid = [];
  if (k > n.toString().length){
    return 0;
  }
  for (i = 0; i < k; i++){
    arrayRid = arrayN.pop();
  }
  return arrayRid;
}

console.log(dueNumeri(123456, 3));
