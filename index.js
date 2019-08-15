
var git = require('simple-git')
var path = require('path')

if (process.argv.length < 3)
	console.log('provide repo directory')

var time = process.argv[3] || 5; // seconds

var repo = process.argv[2]
var repoPath = path.join(repo, '')

setTimeout(() => {
	git(repoPath)
	.add('.', () => console.log('added all files'))
	.commit('updated this feature')
}, time*1000)
