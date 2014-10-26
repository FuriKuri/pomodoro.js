var interval = require('./interval');
var tick = require('./tick');
var readline = require('readline');
var Pause = require('./pause');
var Task = require('./task');

//task();
var pause = new Pause();
var task = new Task();

pause.callback = task.run;
task.callback = pause.run;

task.run();