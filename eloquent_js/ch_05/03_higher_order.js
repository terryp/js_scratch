
function forEach (array, action) {
	for (var i = 0; i < array.length; i++) {
		action(array[i]);
	};
}

function sum (numbers) {
	var total = 0;
	forEach(numbers, function(number) {
		total += number;
	});
	return total
}