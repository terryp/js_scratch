


var index;

function do_something(callback) {
    callback();
}

for (index = 0; index < 3; ++index) {
    do_something(do_something_callback);
}

function do_something_callback() {
    console.log("index = " + index);
}

