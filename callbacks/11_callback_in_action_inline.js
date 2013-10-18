
// This is an empty array
var all_user_data = []; 

var some_string = "Foo";

function log_stuff(user_data) {
    if (typeof user_data === "string") {
        console.log(user_data);
    } else if (typeof user_data === "object") {
        for (var item in user_data) {
            console.log(item + ": " + user_data[item]);
        }
    }
}

function get_input(options, callback) {
    all_user_data.push(options);
    if (typeof callback === "function") {
        callback(options);
    }
}

get_input({name: "Terry", working_on: "Callbacks"}, log_stuff);
get_input(some_string, log_stuff);