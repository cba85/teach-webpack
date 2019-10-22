const base = require('./webpack.base.js')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const env = require('../config/prod.env')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = merge(base, {
	optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
				{
					loader: MiniCssExtractPlugin.loader,
		            options: {
		              publicPath: '../',
		              hmr: process.env.NODE_ENV === 'development',
					}
				},
				'css-loader',
				'sass-loader'
				]
			}
		]
	},
	plugins: [
		new UglifyJSPlugin(),
		new webpack.DefinePlugin({
			//'process.env.NODE_ENV': JSON.stringify('production')
			'process.env': JSON.stringify(env)
		}),
		new MiniCssExtractPlugin({
	      filename: '[name].css',
	      chunkFilename: '[id].css',
	    })
	],
	/*
	module: [
		{
			test: /\.scss$/,
			use: [
				'style-loader',
				{ 
					loader: 'css-loader',
					options: {
						minimize: true
					} 
				},
				'sass-loader'
			]
		},
	]
	*/
})