
function starts_with(string, pattern) {
	return string.slice(0, pattern.length) == pattern;
}

console.log(starts_with("porker", "po"));