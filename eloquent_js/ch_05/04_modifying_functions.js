
function negate(func) {
	return function() {
		return !func.apply(null, arguments);
	}
}

var isNotNaN = negate(isNaN);
console.log(isNotNaN(NaN));