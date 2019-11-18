![Logo](https://github.com/Abelaa/FakeCommitJS/blob/master/logo.PNG?raw=true)

# FakeCommitJS

This is a simple node module that allows you to create fake commits
in a repository every now and then.

## Getting Started

There are two ways to use this module. One is by installing it globally and using
it with the command `fakecommit`. The second one is by extending the module as shown in the
example section.

## Installation

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
You need to [download and install git](https://git-scm.com/downloads) aswell. 
Installation of git ensures that 'git' command is accessible from the terminal which 
is essential for this module.

#### Global Installation

```bash
$ npm install -g fakecommitjs --save
```

#### Local Installation (i.e if you want to customize the module)

```bash
$ npm install fakecommitjs --save
```

## Global Module Usage

Run `fakecommit <repo-path> <target-file> [interval=5]` to simply use
this project without any customization. The interval should be specified in seconds.

You need to install the module globally inorder to use the above command.

## Local Module Usage

The module exports two main functions:

	* addCommitMessages(commitMessages: String[])
	* startAutoCommit(repoPath: String, targetFile: String, interval: number)

## Example

```javascript
// index.js file

const { startAutoCommit, addCommitMessages } = require('fakecommitjs')

addCommitMessages([
	'what\'s going on',
	'how come is this happening',
	'what the hell do we do',
	'oh no'
])

startAutoCommit(
	'../example-repo',
	'../example-repo/app.js',
	3
)
```

#### To see the result execute the file as shown

```bash
$ node index.js
```
