
var commit = require('../lib')

if (process.argv.length < 3) {
	console.log('provide location of the repo')
	return
}

var repoPath = process.argv[2]
var interval = process.argv[3] || 5 // seconds

console.log('there you go\n')

setInterval(function () {
	commit(repoPath)
}, interval*1000)
