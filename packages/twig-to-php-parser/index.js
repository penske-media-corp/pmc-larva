const execPhp = require( 'exec-php' );
const path = require( 'path' );
const chalk = require( 'chalk' );
const getAppConfiguration = require( './lib/getConfig' );
const config = getAppConfiguration( 'parser' );

/**
 * Twig to PHP Parser
 *
 * @param {Object} config Optional object containing configuration. See the
 *                        package README for supported configuration.
 */

function twigToPhpParser( config = {} ) {
	// TODO: We need some kind of wrapper here for config...or better:
	// move this to pmc-plugins/pmc-larva and scrap this awkward JS
	// execPhp wrapper situation, and use Larva\Config for this config.
	let twigDir = path.join( process.cwd(), './src/patterns' );
	let phpDir = path.join( process.cwd(), '../template-parts/patterns' );
	let isUsingPlugin = false;

	if ( 'undefined' !== typeof config.twigDir ) {
		if ( config.twigDir.startsWith( '.' ) ) {
			twigDir = path.join( process.cwd(), config.twigDir );
		} else {
			twigDir = config.twigDir;
		}
	} else if ( 'undefined' !== typeof config.relativeSrcOverride ) {
		if ( config.relativeSrcOverride.startsWith( '/' ) ) {
			twigDir = config.relativeSrcOverride;
		} else {
			twigDir = path.join( process.cwd(), config.relativeSrcOverride );
		}
	}

	if ( 'undefined' !== typeof config.isUsingPlugin ) {
		isUsingPlugin = config.isUsingPlugin;
	}

	if ( 'undefined' !== typeof config.phpDir ) {
		phpDir = config.phpDir;
	}

	return new Promise( ( resolve, reject ) => {
		execPhp(
			path.resolve( __dirname, './lib/twig-to-php-parser.php' ),
			config.phpBinaryPath,
			function ( error, php, output ) {
				if ( error ) {
					reject( error );
				}

				php.twig_to_php_parser(
					twigDir,
					phpDir,
					isUsingPlugin,
					function ( error, result, output, printed ) {
						if ( error ) {
							reject( error );
						}

						resolve( result );
					}
				);
			}
		);
	} );
}

function parseIncludePath(
	twigIncludeStr,
	patternName,
	dataName,
	isUsingPlugin = false
) {
	return new Promise( ( resolve, reject ) => {
		execPhp(
			path.resolve( __dirname, './lib/twig-to-php-parser.php' ),
			config.phpBinaryPath,
			function ( error, php, output ) {
				if ( error ) {
					reject( error );
				}

				php.parse_include_path(
					twigIncludeStr,
					patternName,
					dataName,
					isUsingPlugin,
					function ( error, result, output, printed ) {
						if ( error ) {
							reject( error );
						}

						resolve( result );
					}
				);
			}
		);
	} );
}

function parseSvgPath( twigSvgIncludeStr, svgName, isUsingPlugin = false ) {
	return new Promise( ( resolve, reject ) => {
		execPhp(
			path.resolve( __dirname, './lib/twig-to-php-parser.php' ),
			config.phpBinaryPath,
			function ( error, php, output ) {
				if ( error ) {
					reject( error );
				}

				php.parse_svg_path(
					twigSvgIncludeStr,
					svgName,
					isUsingPlugin,
					function ( error, result, output, printed ) {
						if ( error ) {
							reject( error );
						}

						resolve( result );
					}
				);
			}
		);
	} );
}

function parseWpAction( twigMarkup ) {
	return new Promise( ( resolve, reject ) => {
		execPhp(
			path.resolve( __dirname, './lib/twig-to-php-parser.php' ),
			config.phpBinaryPath,
			function ( error, php, output ) {
				if ( error ) {
					reject( error );
				}

				php.parse_wp_action(
					twigMarkup,
					function ( error, result, output, printed ) {
						if ( error ) {
							reject( error );
						}

						resolve( result );
					}
				);
			}
		);
	} );
}

module.exports = {
	twigToPhpParser,
	methods: {
		parseIncludePath,
		parseSvgPath,
		parseWpAction,
	},
	run: () => {
		twigToPhpParser( config )
			.catch( ( e ) => console.log( e ) ) // PHP errors
			.then( ( result ) =>
				console.log(
					chalk.green( 'Completed parsing Twig templates to PHP.' )
				)
			)
			.catch( ( e ) => console.log( e ) );
	},
};
