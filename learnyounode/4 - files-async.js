var fs = require('fs');

var path = process.argv[2];

fs.readFile(path, 'utf-8', callback);

function callback(err, data) {

	if (err) {
		console.log(err); 

	} else {

		var totalLinhas = data.toString().split('\n').length - 1;

		console.log(totalLinhas);

	}

}







