
function create_function() {
    var local = 100;
    return function(){
        return local;
    }
}

console.log(create_function()());