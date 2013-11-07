
var request = require('request');

request('http://www.google.com', function(err, response, body) {
	console.log(body);
})

console.log('Done!');