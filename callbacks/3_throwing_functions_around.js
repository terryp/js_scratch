
function hello() {
    console.log("Hello!");
}

function say_something(callback) {
    callback();
}

say_something(hello);