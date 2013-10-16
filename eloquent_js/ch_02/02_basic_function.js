
/*
    Basic function that takes two arguments, base and exponent.
    Returns "base to the exponent."
*/

function power(base, exponent) {
    var result = 1; 
    for (var count = 0; count < exponent; count++) {
        result *= base
    }
    return result;
}

console.log(power(10,2));