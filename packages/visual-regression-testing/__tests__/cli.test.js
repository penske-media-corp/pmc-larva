const assert = require( 'assert' );
const path = require( 'path' );
const { getCliModuleArgs } = require( '../lib/backstop-utils' );
// const getAppConfiguration = require( '@penskemediacorp/larva' ).config;

const processMocker = {
	argv: [
		'/usr/local/Cellar/node/10.11.0/bin/node',
		'/Users/laraschenck/Sites/pmc-deadline-2019/assets/node_modules/.bin/backstop',
		'--configPath=node_modules/pmc-build-utils/lib/backstop.js',
		'test',
		'--modules=footer,mega-menu-content,social-share'
	]
};

describe( 'cli for testing', function() {

	it( 'gets a list of modules from the cli', () => {
		assert.deepEqual( getCliModuleArgs( processMocker.argv ), [ 'footer', 'mega-menu-content', 'social-share' ] );
	});

});
