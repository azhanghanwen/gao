var webpack = require('webpack');
module.exports = {
	entry: {
		bundle:'./src/main.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].js'
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				use: ['vue-loader']
			},
			{
				test:/\.css$/,
				use: ['style-loader','css-loader']
			}
		]
	},
	devtool:'cheap-eval-source-map',
	resolve:{
		alias:{
			"vue":"vue/dist/vue.js"
		}
	},
	devServer: {
		compress: true,
		port: 8989,
		open:true,
		inline:true
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	]
}