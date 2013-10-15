
function power (number, exponent) {
    var result = 1;
    if (exponent === undefined) {
        exponent = 2;
    }
    for (var i = 0; i < exponent; i++) {
        result *= number;
    }
    return result;
}

console.log(power("R", 2, "D", 2));