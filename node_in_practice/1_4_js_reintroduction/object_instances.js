
function User(name, password) {
    this.name = name;
    this.password = password;
}

var alex = new User('alex', 'test');

User.prototype.signIn = function(name, password) {
    if (this.name === this.name && this.password === this.password) {
        this.loggedIn = true;
    }
}

console.log(alex);
console.log(alex.name);
console.log(alex.password);

alex.signIn();

console.log(alex);

var admin = function() {};
admin.prototype = Object.create(User.protoype);

admin.name = 'root';
admin.password = 'abc123';

console.log(admin instanceof User)
console.log(admin);
console.log(admin.name);
console.log(admin.password);

admin.signIn();

console.log(admin);