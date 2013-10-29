
var	currentThing = null;

function processThing(thing) {
	var prevThing = currentThing;
	currentThing = thing;
	try {
		// insert complicated shizzle!
	} finally {
		// do this even if you throw an error!
		currentThing = prevThing;	
	}
}