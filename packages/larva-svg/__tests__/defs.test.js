const assert = require( 'assert' );
const getSassVarsString = require( '../lib/getSassVarsString' );

const iconObj = {
	envelope: '<svg>hello</svg>',
	chat: '<svg>hello chat</svg>',
};

const expectedSass = `$envelope: '<svg>hello</svg>';\n\n$chat: '<svg>hello chat</svg>';\n\n`;

describe( 'getSassVarsString', () => {
	it( 'outputs a string of Sass', () => {
		assert.equal( getSassVarsString( iconObj ), expectedSass );
	} );
} );
