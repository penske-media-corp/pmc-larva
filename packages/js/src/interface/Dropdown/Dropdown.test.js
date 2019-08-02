const assert = require( 'assert' );

import Dropdown from './Dropdown';

describe( 'Dropdown', () => {

	it('starts with an initially closed state', () => {
		const dropdown = new Dropdown( document.querySelector( '.test' ) ); 
		assert.equal( dropdown.isExpanded, false );
	});

});
