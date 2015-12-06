var array = ["snowboard","bike","swimming","superlongword","ironman"];

function longestString(array) {
  len = [];
  array.map(function(cv){
    return len.push(cv.length);
  })
  var maxValue = Math.max.apply(null, len);
  var maxString = array[len.indexOf(maxValue)];
  var maxObj = {[maxString]:maxValue}
  console.log(maxObj);
  return maxObj;
}

longestString(array);
