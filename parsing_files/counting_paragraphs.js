var fs = require('fs');

path = '/Users/terryp/Sites/development/js_scratch/parsing_files/files/2.txt';

fs.readFile(path, 'utf8', function(err, data) {
	if (err) {
		console.log("Unable to read file.")
	} else {
		var paragraphs = data.split("\n");
		console.log(paragraphs.length);
		var word_count = 0;
		for (var i = 0; i < paragraphs.length; i++) {
			var paragraph_word_count = paragraphs[i].split(" ").length;
			word_count += paragraph_word_count;
		}
		console.log(word_count);
	}
})