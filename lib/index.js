
var child_process = require('child_process')
var path = require('path')
var fs = require('fs')

var commitMessages = [
	'fixed simple bug',
	'resolved compatiblity issue',
	'updated feature',
	'minor change',
	'hotfix'
]

// add space at the EOF
function modifyRepo(repoPath, targetFile) {
	try {
		console.log('*** Modifying ' + targetFile)
		fs.appendFileSync(targetFile, ' ')
		var randomMessage = Math.round(Math.random()*1000)%(commitMessages.length)
		commitMessage = commitMessages[randomMessage]
	} catch (e) {
		var commitMessage = ''
		console.log(e)
	}

	return commitMessage
}

function commit(repoPath, targetFile) {
	var message = modifyRepo(repoPath, targetFile)
	if (message == '') {
		console.log(`Oops... [ error occurred while modifying file ]\n`)
		return 
	}

	message = `"${message}"`
	try {
		var output = child_process
			.execSync(`cd ${repoPath} && git add . && git commit -m ${message} --allow-empty`)
		console.log(`Yay... [ commit successful ]\n ${output.toString()}`)
	} catch (e) {
		console.log(`Oops... [ error occurred while committing ]\n + ${e.toString()}`)
	}
}

function startAutoCommit(repoPath, targetFile, interval) {
	var absoluteRepoPath = path.resolve(repoPath)
	var absoluteFilePath = path.resolve(targetFile)
	setInterval(function () {
		commit(absoluteRepoPath, absoluteFilePath)
	}, interval*1000)
}

function addCommitMessages(messages) {
	for (var message of messages) {
		commitMessages.push(message)
	}
}

module.exports = {
	addCommitMessages,
	startAutoCommit
}