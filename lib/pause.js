var readline = require('readline');
var interval = require('./interval');
var tick = require('./tick');

module.exports = function() {
	var rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
	});

	rl.question("Start pause with enter", function(answer) {
	  console.log("Pausing...");
	  rl.close();
	  interval(tick, 1000, 5, function() { console.log("Start"); });
	});
};