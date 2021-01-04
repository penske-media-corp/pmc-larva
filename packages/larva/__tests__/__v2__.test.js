describe( '__v2__ pattern objects', () => {

	it( 'should export and object that equals the older version', () => {

		const c_label_v2 = require( './fixtures/src/patterns/components/c-label/__v2__c-label.prototype' );

		const c_label = require( './fixtures/src/patterns/components/c-label/c-label.prototype' );

		expect( c_label_v2 ).toEqual( c_label );

	});
});