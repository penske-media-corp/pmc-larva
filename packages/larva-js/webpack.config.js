const path = require('path');

const aliases = {
	'@npm': path.resolve( './node_modules/' ),
};

module.exports = (env, argv) => {
	return {
		entry: {
			common: './src/common.js'
		},
		watch: 'production' !== argv.mode,
		mode: 'development',
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'build')
		},
		resolve: {
			alias: aliases,
		},
	};
};
