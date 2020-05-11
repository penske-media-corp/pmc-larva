const execPhp = require( 'exec-php' );
const path = require( 'path' );
const chalk = require( 'chalk' );
const getAppConfiguration = require( '@penskemediacorp/larva' ).getConfig;
const config = getAppConfiguration( 'parser' );

/**
 * Twig to PHP Parser
 *
 * @param {object} config Optional object containing configuration. See the
 *                        package README for supported configuration.
 * }
 */

function twigToPhpParser( config = {} ) {

	// TODO: We need some kind of wrapper here for config...or better:
	// move this to pmc-plugins/pmc-larva and scrap this awkward JS
	// execPhp wrapper situation, and use Larva\Config for this config.
	let twigDir = path.join( process.cwd(), './src/patterns' );
	let phpDir = path.join( process.cwd(), '../template-parts/patterns' );
	let isUsingPlugin = false;

	if ( 'undefined' !== typeof config.twigDir ) {
		twigDir = config.twigDir;
	}

	if ( 'undefined' !== typeof config.isUsingPlugin ) {
		isUsingPlugin = config.isUsingPlugin;
	}

	if ( 'undefined' !== typeof config.phpDir ) {
		phpDir = config.phpDir;
	}

	return new Promise( ( resolve, reject ) => {

		execPhp( path.resolve( __dirname, './lib/twig-to-php-parser.php' ), config.phpBinaryPath, function( error, php, output ) {

			if ( error ) {
				reject( error );
			}

			php.twig_to_php_parser( twigDir, phpDir, isUsingPlugin, function( error, result, output, printed ) {

				if ( error ) {
					reject( error );
				}

				resolve( result );

			});

		});

	});

};

function parseIncludePath( twigIncludeStr, patternName, dataName, isUsingPlugin = false ) {

	return new Promise( ( resolve, reject ) => {

		execPhp( path.resolve( __dirname, './lib/twig-to-php-parser.php' ), config.phpBinaryPath, function( error, php, output ) {

			if ( error ) {
				reject( error );
			}

			php.parse_include_path( twigIncludeStr, patternName, dataName, isUsingPlugin, function( error, result, output, printed ) {

				if ( error ) {
					reject( error );
				}

				resolve( result );

			});

		});

	});

};

module.exports = {
	twigToPhpParser: twigToPhpParser,
	methods: {
		parseIncludePath: parseIncludePath
	},
	run: () => {
		twigToPhpParser( config )
			.catch( e => console.log( e ) ) // PHP errors
			.then( result => console.log(
				chalk.green( 'Completed parsing Twig templates to PHP.' )
			) )
			.catch( e => console.log( e ) );
	}
};
