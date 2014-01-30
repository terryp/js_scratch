
var worfsMoney = 600.90;
var bloodWinePrice = 200.30;
var worfsTotal = bloodWinePrice * 3;

console.log(worfsMoney >= worfsTotal);

console.log(worfsTotal);

/*

- All numbers in JS are floating point numbers. 

- Due to the binary nature of their encoding, some decimals cannot be represented with perfect accuracy. 
    - In action 1/3 is really ....
    - 0.333333333 (infinite)

- You might think about rounding. 
    - Then you're doing it wrong. 

- You might think about converting to strings. 
    - Then you're doing it wrong again - and you're not even doing math!

- So what do you do?!

- Don't use decimals! Use integers!

*/

console.log("---------------------------------");
console.log("DON'T USE DECIMALS! USE INTEGERS!");
console.log("---------------------------------");

var worfsMoney_2 = 60090;
var bloodWinePrice_2 = 20030;
var worfsTotal_2 = bloodWinePrice_2 * 3;

console.log(worfsMoney_2 >= worfsTotal_2);

console.log(worfsTotal_2);