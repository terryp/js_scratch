
/**
 * Playing with scope. Set something in global scope = x. 
 * Use functions to change it's value. 
 */

var x = "A";
console.log(x);

function set_var_to_b() {
    x = "B";
}

set_var_to_b();
console.log(x); 

function set_var_to_c() {
    var x; 
    x = "C";
}

set_var_to_c();
// See we only changed the value of x local to the 'set_var_to_c' function.
// We didn't change it in the global scope which is why it is "B" and not "C."
console.log(x);