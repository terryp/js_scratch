
function multiply_absolute(number, factor) {
    function multiply(number) {
        return number * factor
    }
    if (number < 0) {
        return multiply(-number);
    } else {
        return multiply(number);
    }
}

console.log(multiply_absolute(-2,2));