/**
 * This command can be used from within any Larva project to run the twig to
 * php parser.
 */

const shell = require( 'shelljs' );
shell.exec( `npx @penskemediacorp/twig-to-php-parser` );
