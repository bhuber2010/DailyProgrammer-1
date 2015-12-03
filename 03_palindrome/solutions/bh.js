var prompt = require('prompt');

prompt.start();

prompt.get("word", function (err, result) {
  var word = result.word;
  var word_array = word.split("");
  var reverse = word_array.slice().reverse();
  console.log(word_array);
  console.log(reverse);
  if (word_array[0] !== reverse[0]) {
    console.log("negative buddy");
  } else {
    for (var i = 0; i < word_array.length; i++) {
      if (word_array[i] !== reverse[i]) {
        console.log("not a palindrome");
      } else {
        console.log("good so far");
      }
    }
  }
});
