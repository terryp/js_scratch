
// this is in a global scope
var my_bases = ["Base 1", "Base 2", "Base 3"]

function belong_to_us(bases) {
    console.log("All your base, are belong to us. Especially these:");
    bases.forEach(function(name) {
        console.log("\t" + name);
    })
}

function all_your_base(data, callback) {
    if (typeof callback === "function") {
        callback(data);
    }
}

all_your_base(my_bases, belong_to_us);