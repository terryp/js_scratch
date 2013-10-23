
var assert = require('assert');

var now = new Date();
var then = new Date(1974, 9, 25);
var specific = new Date(2013, 10, 23, 20, 45, 30)

console.log(now);

console.log("Year:", now.getFullYear(), "month: ", now.getMonth() + 1, "day: ", now.getDate());
console.log("Hour: ", now.getHours(), "minutes: ", now.getMinutes(), "seconds: ", now.getSeconds());
console.log("Day of week: ", now.getDay());
console.log(now.getTime());

console.assert(now > then, "Or fail!");
console.assert(then > specific, "Or fail!")