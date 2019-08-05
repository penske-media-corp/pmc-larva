const path = require('path');

module.exports = {
	entry: './src/common.js',
	watch: true,
	mode: 'development',
	output: {
		filename: 'common.js',
		path: path.resolve(__dirname, 'build')
	}
};