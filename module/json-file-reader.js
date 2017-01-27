
// var filename = require('./countries.json')

function read(filename, callback){
    // var filename ='countries.json';
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
// var readandparse = function(countryName){
// 	var fs = require('fs'); 

// 	fs.readFile('./countries.json' ,'utf-8',function(error,data){
// 		if (error) {
// 			console.log('failed to read this file.');
// 			throw error;
// 		}
// 		console.log ('Country:'+''+ countryName);
// 	//parse it
// 	var countries = JSON.parse(data)

// 	for (var i = 0; i < countries.length; i++){
// 		if (countries[i].name == countryName){
// 			console.log ('Top Level Domain:'+''+ countries[i].topLevelDomain);
// 		}
// 	}

// })
	
// }

