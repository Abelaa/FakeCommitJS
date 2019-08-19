
var commit = require('../lib')
var fs = require('fs')

if (process.argv.length < 3) {
	console.log('provide location of the repo')
	return
}

var repoPath = process.argv[2]
var interval = process.argv[3] || 5 // seconds

if (fs.existsSync(repoPath)) {
	setInterval(function () {
		commit(repoPath)
	}, interval*1000)
} else {
	console.log("repo path doesn't exist")
}
