var fs = require('fs');

// Expose EVEYTHING under ./src folder
var path = __dirname+'/src/'

fs.readdirSync(path).forEach( function (file) {
	var m = require(path+file);
	for(var attr in m)
		exports[attr] = m[attr];
});