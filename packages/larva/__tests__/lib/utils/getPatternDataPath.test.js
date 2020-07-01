const assert = require( 'assert' );
const path = require( 'path' );
const fixture = path.join( __dirname, '../../fixtures' );
const getPatternDataPath = require( '../../../lib/utils/getPatternDataPath' );

describe( 'getPatternDataPath', () => {
	it( 'gets the path to .prototype.js if it exists', () => {

		const expectedPrototypePath = path.join( fixture, 'src/patterns/components/c-nav-link/c-nav-link.prototype.js' );
		const params = {
			name: 'c-nav-link',
			type: 'components',
			variant: 'prototype'
		};


		assert.equal( getPatternDataPath( fixture + '/src/patterns', params ), expectedPrototypePath );
	});

	it( 'gets the path to .json if .prototype does not exist', () => {
		const expectedJsonPath = path.join( fixture, 'src/patterns/objects/o-crap/o-crap.json' );
		const params = {
			name: 'o-crap',
			type: 'objects',
			variant: 'prototype'
		};

		assert.equal( getPatternDataPath( fixture + '/src/patterns', params ), expectedJsonPath );
	});

	it( 'gets the path to a variant, if specified', () => {
		const expectedVariantPath = path.join( fixture, 'src/patterns/components/c-nav-link/c-nav-link.featured.js' );
		const params = {
			name: 'c-nav-link',
			type: 'components',
			variant: 'featured'
		};

		assert.equal( getPatternDataPath( fixture + '/src/patterns', params ), expectedVariantPath );
	});
});


