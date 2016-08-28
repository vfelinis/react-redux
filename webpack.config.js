module.exports = {
	entry: ['./client/client.js'],
	output: {
		path: './dist/js/',
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: './node_modules/',
				query:{
					presets: ['react', 'es2015']
				}
			}
		]
	}
}