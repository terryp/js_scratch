
function add (number, how_much) {
	if (arguments.length < 2) {
		how_much = 1; 
	};
	return number + how_much;
}

console.log(add(6));
console.log(add(6,4));