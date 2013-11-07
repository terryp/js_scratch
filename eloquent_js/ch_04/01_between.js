
function between(string, start, end) {
	var startAt = string.indexOf(start) + start.length;
	var endAt = string.indexOf(end, startAt)
	return string.slice(startAt, endAt);
}

var result = between("Monkey in the middle", "in", "middle");
console.log(result);

var other_result = between("Louis 'Pops' Armstrong", "'", "'");
console.log(other_result);

