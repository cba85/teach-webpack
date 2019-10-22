const base = require('./webpack.base.js')
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const env = require('../config/dev.env')

module.exports = merge(base, {
	devtool: "cheap-eval-source-map",
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
		]
	},
	devServer: {
		contentBase: path.join(__dirname, '../dist'),
		port: 8080,
		compress: true
		//open: true
	},
	plugins: [
		new webpack.DefinePlugin({
			//'process.env.NODE_ENV': JSON.stringify('production')
			'process.env': JSON.stringify(env)
		})
	]
})