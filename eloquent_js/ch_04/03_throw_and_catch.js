
function lastElement(array) {
	if (array.length > 0) {
		return array[array.length - 1];
	} else {
		throw "Cannot take the last element of an empty array!";
	}
}

function lastElementPlusTen(array) {
	return lastElement(array) + 10;
}

try	{
	console.log(lastElementPlusTen([]));
} catch (error) {
	console.log("Something went wrong: ", error);
}