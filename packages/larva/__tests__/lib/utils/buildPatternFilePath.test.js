const assert = require( 'assert' );
const path = require( 'path' );
const fixture = path.resolve( __dirname, '../../fixtures' );
const buildPatternFilePath = require( '../../../lib/utils/buildPatternFilePath' );

const expectedPathForLarva = fixture + '/src/patterns/objects/o-nav/o-nav.json';
const expectedPathForProject = '/assets/src/patterns/objects/o-nav/o-nav.json';

describe( 'buildPatternFilePath', () => {

	it( 'builds a path for o-nav json in larva', () => {
		assert.equal( buildPatternFilePath( fixture + '/src/patterns', 'o-nav', '.json' ), expectedPathForLarva );
	});

	it( 'builds a path for o-nav json in consuming project', () => {
		assert.equal( buildPatternFilePath( '/assets/src/patterns', 'o-nav', '.json' ), expectedPathForProject );
	});
});