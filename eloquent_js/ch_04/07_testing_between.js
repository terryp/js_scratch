
var assert = require('assert');

function between(string, start, end) {
	var startAt = string.indexOf(start) + start.length;
	var endAt = string.indexOf(end, startAt)
	return string.slice(startAt, endAt);
}

function testBetween() {
	assert.equal(between("a |b| c", "|", "|"), "b");
	assert.equal(between("[[n]]", "[[", "]]"), "n");
	assert.notEqual(between("]x[", "[", "]"), undefined);
}

testBetween();