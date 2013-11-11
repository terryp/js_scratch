
var fs = require('fs');

var path_1 = '/Users/terryp/Sites/development/js_scratch/parsing_files/files/1.txt';
var path_2 = '/Users/terryp/Sites/development/js_scratch/parsing_files/files/2.txt';

var files = [path_1, path_2];

var process_file = function(string) {
	var paragraphs = string.split("\n");
	var words = 0;
	for (var i = 0; i < paragraphs.length; i++) {
		var paragraph_word_count = paragraphs[i].split(" ").length;
		words += paragraph_word_count;
	}
	console.log("Paragraphs: " + paragraphs.length);
	console.log("Words: " + words);
}

files.forEach(function(file) {
	fs.readFile(file, 'utf8', function(err, data) {
		console.log("Reading: " + file);
		process_file(data);
	})
})
