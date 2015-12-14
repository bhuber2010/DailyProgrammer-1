
var m1 = [[1, 64, 23],
          [22, 50, 2]];

function mtxDimen(matrix) {
  var x, y;
  x = matrix.length;
  y = matrix[0].length;
  return x+"x"+y;
}

console.log(mtxDimen(m1));


function mtxRotat90(matrix) {
  var newMtx = [];
  var xArrays = matrix[0].length;
  matrix[1].map(curr, i) {
    var arr = [];
    arry[0] = curr;
    newMtx.push(arr);
  }
  return newMtx;
}

console.log(mtxRotat90(m1));
