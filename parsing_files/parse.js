// I want to be able to parse a series of files in a directory. 
// I would like to count the number of words in the file - 
// but I want to be able to do this in asynchronous fashion.

// Thank god for the Google!
// http://stevehanov.ca/blog/index.php?id=127

var fs = require('fs');
var path = require('path');

var data_dir = path.join(process.cwd(), "files");

var process_file = function(string) {
	var paragraphs = string.split("\n");
	var words = 0;
	for (var i = 0; i < paragraphs.length; i++) {
		var paragraph_word_count = paragraphs[i].split(" ").length;
		words += paragraph_word_count;
	}
	console.log("\t" + "Paragraphs: " + paragraphs.length);
	console.log("\t" + "Words: " + words);
	console.log("============== END =============");
}

fs.readdir(data_dir, function(err, files) {
	if (err) {
		console.log("Error reading directory.");
	} else {
		files.forEach(function(file) {
			file = path.join(data_dir, file);
			// This is asynchronous ... so Node is going to let
			// this bit do it's thing! It's actually going to 
			// release control of the loop. And .....
			fs.readFile(file, 'utf8', function(err, data) {
				if (err) {
					console.log("Error reading file.");
				} else {
					file = file.split("/").slice(-1)[0]
					console.log("Processing: " + file);
					process_file(data);	
				}
			})
			// .... Pick up right here! 
			// So while this is way way way after the actual
			// readfile operation ... due to the async nature 
			// of the operation ... it actually gets printed
			// out way way way before the callback finishes!
			console.log("Hello!");
		})
	}
})