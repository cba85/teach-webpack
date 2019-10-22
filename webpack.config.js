const path = require('path')

module.exports = {
	entry: "./src/app.js",
	output: {
		filename: "js/app.js",
		path: path.resolve(__dirname, 'dist')
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: [
					{
						loader: 'babel-loader'
						/*
						options: {
							babelrc: false,
							presets: ['@babel/preset-env']
						}
						*/
					}
				]
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 8080,
		compress: true
		//open: true
	}
}