/*
  Primo e ultimo
  Scrivi due funzioni, una che prenda in input tre numeri e restituisca il maggiore, l'altra che restituisca il minore.

  Variante
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array, l'altra il valore minore.
  http://www.imparareaprogrammare.it
*/

/*
function numeromaggiore (primo, secondo, terzo){
  if (primo > secondo && primo > terzo){
    return primo;
  } else if (secondo > primo && secondo > terzo){
    return secondo;
  } else if (terzo > primo && terzo > secondo){
    return terzo
  }
}

console.log(numeromaggiore(4, 6, 10));

function numerominore (primo, secondo, terzo){
  if (primo < secondo && primo < terzo){
    return primo;
  } else if (secondo < primo && secondo < terzo){
    return secondo;
  } else if (terzo < primo && terzo < secondo){
    return terzo
  }
}
console.log(numerominore(4, 6, 10));
*/

function numeromaggiore (primo, secondo, terzo){
    return Math.max(primo, secondo, terzo);
  }
console.log(numeromaggiore(4, 6, 10));
