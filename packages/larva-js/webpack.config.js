const path = require( 'path' );

const aliases = {
	'@npm': path.resolve( './node_modules/' ),
};

module.exports = ( env, argv ) => {
	return {
		entry: {
			'video-showcase': './src/video-showcase.js',
		},
		watch: 'production' !== argv.mode,
		mode: 'development',
		output: {
			filename: '[name].js',
			path: path.resolve( __dirname, 'build' ),
		},
		resolve: {
			alias: aliases,
		},
	};
};
