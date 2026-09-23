const path = require( 'path' );

const aliases = {
	'@npm': path.resolve( __dirname, '../../node_modules' ),
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
