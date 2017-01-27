// can read and parse any json file

function read(filename, callback){
	var fs = require('fs'); 
	fs.readFile('./' + filename ,'utf-8',function(error,data){
		if (error) {
			console.log('failed to read this file.');
			throw error;
		}
		var parsed = JSON.parse(data)
		callback(parsed);
	})
}
module.exports= read

