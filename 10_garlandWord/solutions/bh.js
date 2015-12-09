function garland(word) {
	var result = 0;
	for (var i=1;i<word.length;i++) {
		if (word.substr(0,i) === word.substr(-i)){
			result = i;
		}
	}
	return result;
}

function garland2(word) {
  if (word === arguments[1]) return word.length;
  var word2 = arguments[1] || word;
  return garland2(word.substr(0, word.length - 1), word2.substr(1));
}
