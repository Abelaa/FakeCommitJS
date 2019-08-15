
var git = require('simple-git')
var path = require('path')

if (process.argv.length < 3)
	console.log('provide repo directory')

var repo = process.argv[2]
var repoPath = path.join(repo, '')

git(repoPath)
	.add('.')
	.commit('new commit')