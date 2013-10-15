
var spawn = require('child_process').spawn;

var commands = [
    {cmd: 'ls', args: ['-lh', '/etc' ]},
    {cmd: 'ls', args: ['-lh', '/usr' ]},
    {cmd: 'ls', args: ['-lh', '/home']}
];

var index, command, child;

for (index = 0; index < commands.length; index++) {
    command = commands[index];
    child = spawn(command.cmd, command.args);
    child.on('exit', function() {
        console.log("Process index " + index + " exited");
    });
}