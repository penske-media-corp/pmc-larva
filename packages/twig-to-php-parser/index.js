const execPhp = require( 'exec-php' );
const path = require( 'path' );
const chalk = require( 'chalk' );
const getAppConfiguration = require( '@penskemediacorp/larva' ).getConfig;


/**
 * Twig to PHP Parser
 *
 * @param {string} twigDir Absolute path to Twig patterns
 * @param {string} phpDir Absolute path to PHP output
 * @param {object} config Optional object containing configuration
 */

function twigToPhpParser( twigDir, phpDir, config = {} ) {

	return new Promise( ( resolve, reject ) => {

		execPhp( path.resolve( __dirname, './lib/twig-to-php-parser.php' ), config.phpBinaryPath, function( error, php, output ) {

			if ( error ) {
				reject( error );
			}

			php.twig_to_php_parser( twigDir, phpDir, function( error, result, output, printed ) {

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

		const config = getAppConfiguration( 'parser' );

		let twigDir = path.join( process.cwd(), './src/patterns' );
		let phpDir = path.join( process.cwd(), '../template-parts/patterns' );

		if ( 'undefined' !== typeof config.twigDir ) {
			twigDir = config.twigDir;
		}

		if ( 'undefined' !== typeof config.phpDir ) {
			phpDir = config.phpDir;
		}

		twigToPhpParser( twigDir, phpDir, config )
			.catch( e => console.log( e ) ) // PHP errors
			.then( result => console.log(
				chalk.green( `Completed parsing Twig templates to PHP. \nFrom: ${twigDir} \nTo: ${phpDir}.` )
			) )
			.catch( e => console.log( e ) );
	}
};
