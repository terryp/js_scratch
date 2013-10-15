
function do_something(callback) {
    callback();
}

var index; 

for (i=0; i < 3; ++i) {
    do_something(function() {
        console.log("index = " + index);
    })
}