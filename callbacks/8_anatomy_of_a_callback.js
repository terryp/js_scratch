


// Problem: I don't understand callbacks in JavaScript. And no matter how
// much Googling I've done and Stack Overflow research I've done - I'm still
// at a relative loss of understanding why I would want to use callbacks
// and how they really work. 


console.log("Step 1. Understanding functions.");
console.log("------------------")

// A function is a reusable piece of code with the following notion
//  - Needs to be defined by the keyword "function."
//  - Can optionally have a name - yeah this is weird, you can have
//    a function that doesn't have a name it just does stuff. 
//  - Can optionally have arguments. Collected in parentheses.
//  - Is bounded by curly braces as the delimiters of it's scope. 
//  - Has some kind of code that works in the middle. 
//
// So here's a basic function. 
//  - It's called "greeting."
//  - It requires a single argument called "string."
//  - It has some curly braces. 
//  - The code in the middle takes the string and creates a greeting string
//    "Hello [ARG]!"

function greeting(string) {
    console.log("Hello " + string + "!");
}

// Now we've defined a function. It's just sitting there in the code. 
// If you want the function to do something, you actually need to call it. 
// To call a function you simply write it's name and then add some 
// parentheses. Like this. 

greeting();

// This won't work though. When you run it you get the output:
// Hello undefined!
// It kind of worked, but if you recall our function requires a string. 
// In the example above, we didn't pass in a string, so the code executes
// but returns "undefined." So let's pass in a variable. 

greeting("World");

console.log("\n");

// Now we get the output that we were thinking that we would get:
//      Hello World!

// So what about this notion of functions having optional names. 
// How does that work? We could write the same exact "greeting" function but
// not call it anything. 

console.log("Step 2. Defining functions.");
console.log("------------------")

//
// As a Pythonista, I take for granted the fact that there's basically only
// one way to define a function in Python (OK, really there's 2 but that
// deals with lambda functions which we might touch on later). In Python, 
// defining a function is done like this:
//
//      >>> def greeting(string):
//      ...     print "Hello %s!" % string
//      ...
//      >>> greeting("World")
//      Hello World!
//
// JavaScript provides three different ways for programmers to define a 
// function. 
//  1. Using the function constructor
//  2. Using function declaration
//  3. Creating a function expression
// 
// Let's examine each one. Slightly more indepth. 
//
var greeting = function (string) {
    console.log("Hello " + string + "!");
}

console.log("Step 3. Functions are first class citizens.");
console.log("------------------")

// You hear and read a lot of people say, "Functions are first class citizens!"
// What does that mean? Per Crockford in "JavaScript: The Good Parts" he 
// effectively summarizes it by saying that:
//
//      Functions are objects. 
//      ...
//      Since functions are objects, they can be used like any other value. 
//      Functions can be stored in variables, objects and arrays.
//
// Let's try that.


// function have_breakfast(food, drink, callback) {
//     console.log("Having a breakfast of " + food + ", " + drink + ".");
//     if (callback && typeof(callback) === "function") {
//         callback();
//     }
// }

// have_breakfast("coffe", "toast", function() {
//     console.log("Breakfast done, let's get to work!");
// })

// Reference
// - http://googlecode.blogspot.com/2009/03/doug-crockford-javascript-good-parts.html
//
// - http://amzn.com/0596517742
//
// - http://books.google.com/books?id=KGt-FxUEj48C&lpg=PT83&ots=CDs3N_gjUh&dq=anatomy%20of%20a%20javascript%20callback&pg=PT84#v=onepage&q=anatomy%20of%20a%20javascript%20callback&f=false
// 
// - http://stackoverflow.com/questions/1140089/how-does-an-anonymous-function-in-javascript-work
// 
// 