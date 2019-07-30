const assert = require( 'assert' );
const path = require( 'path' );
const fixture = path.join( __dirname, '../../fixtures' );
const getPatternDataPath = require( '../../../lib/utils/getPatternDataPath' );

const expectedPrototypePath = path.join( fixture, 'src/patterns/components/c-nav-link/c-nav-link.prototype.js' );
const expectedJsonPath = path.join( fixture, 'src/patterns/objects/o-crap/o-crap.json' );

describe( 'getPatternDataPath', () => {
	it( 'gets the path to .prototype.js if it exists', () => {
		assert.equal( getPatternDataPath( fixture + '/src/patterns', 'c-nav-link' ), expectedPrototypePath );
	});

	it( 'gets the path to .json if .prototype does not exist', () => {
		assert.equal( getPatternDataPath( fixture + '/src/patterns', 'o-crap' ), expectedJsonPath );
	});
});


