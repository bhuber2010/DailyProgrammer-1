var numArray = [1,2,7,5,3,4,4];

var upDown = function(numArray){
  var compare = numArray.slice(1);
  return compare.map(function(n,i){
    return n > numArray[i] ? "up" : n < numArray[i] ? "down" : "even";
  })
}

console.log(upDown(numArray));
