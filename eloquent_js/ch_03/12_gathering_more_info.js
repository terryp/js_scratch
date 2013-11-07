
function catRecord (name, birthdate, mother) {
	return {name: name, birth: birthdate, mother: mother};
}

function addCats(set, names, birthdate, mother) {
	for (var i = 0; i < names.length; i++) {
		set[names[i]] = catRecord(names[i], birthdate, mother);
	}
}

function deadCats(set, names, deathdate) {
	for (var i = 0; i < names.length; i++) {
		set[names[i]].death = deathdate;
	};
}