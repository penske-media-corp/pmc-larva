#!/usr/bin/env node
'use strict';

const args = process.argv.slice(2);
const getAppConfiguration = require( '../lib/utils/getAppConfiguration' );
const writeJson = require( '../lib/writeJson' );
const config = getAppConfiguration( 'patterns' );

switch ( args[0] ) {
	
	// larva write-json
	case 'write-json':
		
		// larva write-json larva
		let fromLarva = args[1] === 'larva' ? true : false;

		writeJson( config, fromLarva );
}