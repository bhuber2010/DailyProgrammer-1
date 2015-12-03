var numArray = [1,2,7,5,3,4,4];

var upDown = function(numArray){
  numArray.map(function(){
    console.log(this);
  })
}

upDown(numArray);
