/*
  Il sottosopra
  Scrivi un programma che prenda in input un array multidimensionale e stampi in output la sua trasposta, in questo modo:
    Input :
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    Output:
      [
        [1, 3, 5],
        [2, 4, 6],
      ]

  http://www.imparareaprogrammare.it
*/


var array1 = [];

array1[0] = [1, 2];
array1[1] = [3, 4];
array1[2] = [5, 6];

console.log(array1);

var array2 = [];

for (i = 0; i < 2; i++){
array2[i] = [array1[0][i], array1[1][i], array1[2][i]];
}

console.log(array2);
