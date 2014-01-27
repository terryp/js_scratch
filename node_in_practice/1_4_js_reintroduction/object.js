
var object = { name: 'Bob', age: 41 };

// The values Bob and 41 are primatives. 
// They can't be broken down any further. 

object.nameAndAge = function() {
    return this.name + ': ' + this.age;
}

console.log(object.nameAndAge());