var chalk = require('chalk');
var fs = require('fs');

fs.readFile('node.txt', function (err, data) {
  console.log(data.toString().replace(/node\.js/ig, chalk.green('Node.js')));
});
