
function greeting(string, callback) {
    console.log("Hello " + string + "!");
    callback();
}

greeting("World", callback);

function callback() {
    console.log("Here's a callback!")
}