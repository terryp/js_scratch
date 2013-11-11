
var data = "The quick brown fox, jumped over the lazy dog";

var countWords = function(string) {
	var count = string.split(" ");
	return count.length;
}

console.log(typeof(data));
console.log(countWords(data));