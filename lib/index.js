var interval = require('./interval');
var tick = require('./tick');

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Tell me your task: ", function(answer) {
  console.log("Your current task is:", answer);
  rl.close();
  interval(tick, 1000, 1000 * 60 * 25);
});