
foo();

function do_something(callback) {
    callback();
}

function foo() {
    var index; 

    for (var index = 0; index < 3; index++) {
        do_something(my_callback);
    }
}

function my_callback() {
    console.log("index = " + index);
}