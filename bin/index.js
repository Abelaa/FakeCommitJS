
var { startAutoCommit } = require('../lib')
var fs = require('fs')

if (process.argv.length < 3) {
	console.log('provide location of the repo')
	console.log('Usage: fakecommit <repo-path> <target-file> [time-interval = 5]')
	return
} else if (process.argv.length < 4) {
	console.log('provide the file be modified')
	console.log('Usage: fakecommit <repo-path> <target-file> [time-interval = 5 seconds]')
	return
}

var repoPath = process.argv[2]
var targetFile = process.argv[3]
var interval = process.argv[4] || 5 // seconds

var repoExists = fs.existsSync(repoPath)
var targetFileExists = fs.existsSync(targetFile)

if (repoExists && targetFileExists) {
	startAutoCommit(repoPath, targetFile, interval)
} else if (!repoExists) {
	console.log(`repo path '${repoPath}' doesn't exist`)
} else if (!targetFileExists) {
	console.log(`target file '${targetFile}' doesn't exist`)
}
