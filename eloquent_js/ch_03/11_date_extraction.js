
var sample_string_1 = "born 02/04/2001 (mother Clementine): Bugeye, Wolverine";
var sample_string_2 = "died 27/04/2006: Black Leclere";

function pull_date(string) {
	function number_at(start, length) {
		return Number(string.slice(start, start+length));
	}
	return new Date(number_at(11,4), number_at(8,2) - 1, number_at(5,2));
}

console.log(pull_date(sample_string_1));