const path = require( 'path' );

const aliases = {
	'@npm': path.resolve( './node_modules/' ),
};

module.exports = {
	entry: './src/common.js',
	watch: true,
	mode: 'development',
	output: {
		filename: 'common.js',
		path: path.resolve( __dirname, 'build' ),
	},
	resolve: {
		alias: aliases,
	},
};
