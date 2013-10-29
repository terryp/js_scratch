
try {
	console.log(Sasquatch);
} catch (error) {
	console.log("Caught: " + error.message);
}

throw new Error("Wolf");