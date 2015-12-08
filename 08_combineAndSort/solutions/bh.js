var array1 = [ "cat", "dog", "fish", "zebra" ],
    array2 = [ "lion", "aardvark", "gorilla" ]

function combSort(array1, array2){
  return array1.concat(array2).sort();
}

console.log(combSort(array1, array2));
