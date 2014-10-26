var readline = require('readline');
var interval = require('./interval');
var tick = require('./tick');

function Pause() {
  var self = this;

  this.run = function() {
		var rl = readline.createInterface({
		  input: process.stdin,
		  output: process.stdout
		});

		rl.question("Start pause with enter", function(answer) {
		  console.log("Pausing...");
		  rl.close();
		  interval(tick, 1000, 5, self.callback);
		});
  };
}

module.exports = Pause;