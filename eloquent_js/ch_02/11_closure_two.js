
function make_adder (amount) {
    return function (number) {
        return number + amount; 
    }
}

var add_two = make_adder(2);
console.log(add_two(3));