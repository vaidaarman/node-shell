// let fileSystem = require('fs')
var commands = require("./commands.js");

process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", function(data) {
  var cmd = data.toString().trim();
  var doThis = cmd.split(' ')[0]
  var argsStr = data.toString().trim().split(' ').slice(1).join(' ');
 
 // remove the newline
  if (Object.keys(commands).indexOf(doThis) > -1) {
    commands[doThis](argsStr);
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
