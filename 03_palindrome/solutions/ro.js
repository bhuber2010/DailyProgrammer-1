var prompt = require('prompt');

prompt.start();

prompt.get("word", function (err, result) {
  var word = result.word;
  var word_array = word.split("");
  console.log(word_array);
  var reverse = word_array.reverse();
  console.log(reverse);
  for (var i = 0; i < word_array.length; i++) {
    if (word_array[i] !== reverse[i]) {
      console.log("not a palindrome");
    } else {
      console.log("good so far");
    }
  }
  });
