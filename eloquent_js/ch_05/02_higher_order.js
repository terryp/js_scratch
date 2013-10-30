
function forEach (array, action) {
	for (var i = 0; i < array.length; i++) {
		action(array[i]);
	};
}

forEach(["Foo", "Bar", "Baz"], console.log);