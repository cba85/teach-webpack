const webpack = require('webpack')
process.env.NODE_ENV = "prod"
const config = require('./webpack.prod')
const ora = require('ora')
const chalk = require('chalk')

const spinner = ora('Building for production').start()

webpack(config, function (err, stats) {
	console.log('build complete')
	
	spinner.stop()

	if (err) {
		throw err
	}

	console.log(stats.toString({
		colors: true,
		modules: false,
		childern: false,
		chunks: false,
		chunkModules: false
	}))

	console.log(chalk.green('build complete'))
})