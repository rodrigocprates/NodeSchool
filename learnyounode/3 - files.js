var fs = require('fs');

var bufferResponse = fs.readFileSync(process.argv[2]);

var numberOfLines = bufferResponse.toString().split('\n').length - 1;

console.log(numberOfLines);
