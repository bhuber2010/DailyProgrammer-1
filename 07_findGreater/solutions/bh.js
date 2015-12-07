

function greater(array, compare) {
  var greaterValues = [];
  array.map(function(curr){
    if(curr > compare) {
      greaterValues.push(curr)
    }
  })
  return greaterValues;
}

console.log(greater([9,7,5,4,8,3,6,1],5));
