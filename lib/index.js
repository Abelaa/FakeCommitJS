
var child_process = require('child_process')
var path = require('path')
var fs = require('fs')

var commitMessages = [
	'fix simple bug',
	'resolved an issue',
	'updated feature',
]

function modifyRepo(repoPath) {
	// child_process.execSync(`echo new file > ${repoPath}\\index${Math.round(Math.random()*10000)}.js`)

	try {
		var files = fs.readdirSync(repoPath)
		if (files.length > 0) {
			var randomFile = Math.round(Math.random()*1000)%(files.length)
			var targetFile = path.join(repoPath, files[randomFile])
		} else {
			var targetFile = path.join(repoPath, '.modules/modules.txt') // fallback
		}

		console.log('*** ' + targetFile)

		fs.appendFileSync(path.join(repoPath, targetFile), ' ')
		var randomMessage = Math.round(Math.random()*1000)%(commitMessages.length)
		commitMessage = commitMessages[randomMessage]
	} catch (e) {
		var commitMessage = ''
		console.log(e)
	}

	return commitMessage
}

function commit(repoPath) {
	var message = modifyRepo(repoPath)
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

module.exports = commit