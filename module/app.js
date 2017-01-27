//I/O practice country app
//Part 2
var readandparse = require('./json-file-reader.js')
var file = 'countries.json'
console.log ('Country:'+''+ process.argv[2]);
readandparse(file, function(countries){
	for (var i = 0; i < countries.length; i++){
		if (countries[i].name === process.argv[2]){
			console.log ('Top Level Domain:'+''+ countries[i].topLevelDomain);
		}
	}
})

