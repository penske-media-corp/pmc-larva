#!/usr/bin/env node
'use strict';

const fs = require( 'fs' );
const path = require( 'path' );
const spawn = require( 'cross-spawn' );
const chalk = require( 'chalk' );

const getArgsFromCli = require( '../lib/utils/getArgsFromCli' );
const cliArgs = getArgsFromCli();
const scriptName = cliArgs[ 0 ];

const hasScriptFile = fs.existsSync(
	path.join( __dirname, '../scripts/' + scriptName + '.js' )
);

if ( hasScriptFile ) {
	console.log( `Running ${ chalk.italic( scriptName ) } script\n` );
	spawn.sync(
		'node',
		[ path.join( __dirname, `../scripts/${ scriptName }.js` ), ...cliArgs ],
		{ stdio: 'inherit' }
	);
} else {
	console.error( chalk.red( `No file found for "${ scriptName }".` ) );
}
