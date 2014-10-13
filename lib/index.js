var interval = require('./interval');

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Tell me your task: ", function(answer) {
  console.log("Your current task is:", answer);
  rl.close();
  interval(function(t) { 
  	console.log("Tick" + t) 
  }, 1000, 1000 * 60 * 25);
});