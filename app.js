//I/O practice country app
//Part 1
var countryName = process.argv[2];

var fs = require('fs'); 

fs.readFile('./countries.json' ,'utf-8',function(error,data){
	if (error) {
		console.log('failed to read this file.');
		throw error;
	}
	console.log ('Country:'+''+ countryName);

	var countries = JSON.parse(data)

	for (var i = 0; i < countries.length; i++){
		if (countries[i].name == countryName){
			console.log ('Top Level Domain:'+''+ countries[i].topLevelDomain);
		}
	}

})


