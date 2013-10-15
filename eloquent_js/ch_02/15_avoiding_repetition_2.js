
function zero_pad (number, width) {
    var string = String(Math.round(number));
    while (string.length < width)
        string = "0" + string;
    return string;
}

console.log(zero_pad(5, 5));