console.log("Hello World");

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Tell me your task: ", function(answer) {
  console.log("Your current task is:", answer);
  rl.close();
  require('./interval')(function() { console.log("Tick")}, 1000, 5);
});