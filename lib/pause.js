var readline = require('readline');

module.exports = function() {
	var rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
	});

	rl.question("Start pause with enter", function(answer) {
	  console.log("Pause");
	  rl.close();
	});
};