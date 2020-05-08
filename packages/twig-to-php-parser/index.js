const execPhp = require( 'exec-php' );
const path = require( 'path' );
const chalk = require( 'chalk' );
const getAppConfiguration = require( '@penskemediacorp/larva' ).getConfig;

const config = getAppConfiguration( 'parser' );

const twigDir = ( () => {
	if ( undefined !== typeof config.twigDir ) {
		return config.twigDir;
	}

	// Default
	return path.resolve( process.cwd(), './src/patterns' );
} )();

const phpDir = ( () => {
	if ( undefined !== typeof config.phpDir ) {
		return config.phpDir;
	}

	// Default
	return path.resolve( process.cwd(), '../template-parts/patterns' );
} )();

/**
 * Twig to PHP Parser
 *
 * @param {string} twigDirPath Absolute path to Twig patterns
 * @param {string} phpDirPath Absolute path to PHP output
 * @param {object} config Optional object containing configuration
 */

function twigToPhpParser( twigDirPath, phpDirPath, config = {} ) {

	return new Promise( ( resolve, reject ) => {

		execPhp( path.resolve( __dirname, './lib/twig-to-php-parser.php' ), config.phpBinaryPath, function( error, php, output ) {

			if ( error ) {
				reject( error );
			}

			php.twig_to_php_parser( twigDirPath, phpDirPath, function( error, result, output, printed ) {

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
		twigToPhpParser( twigDir, phpDir, config )
		.catch( e => console.log( e ) ) // PHP errors
		.then( result => console.log( chalk.green( 'Completed parsing Twig templates to PHP.' ) ) )
		.catch( e => console.log( e ) );
	}
};
