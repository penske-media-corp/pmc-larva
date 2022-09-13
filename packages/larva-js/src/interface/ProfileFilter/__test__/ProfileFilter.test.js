const assert = require( 'assert' );

import initProfileFilter from '../index';
import ProfileFilter from '../ProfileFilter';

document.querySelector( '.test' ).innerHTML = `
<div class="js-ProfileFilter">
	<form class="js-ProfileFilter-form" method="post" action="http://amh.test/art-collectors/top-200-profiles/">
		<input type="checkbox" name="filter_top200year" id="" value="2018">
		<input type="checkbox" name="filter_top200year" id="" value="2019">
		<input type="checkbox" name="filter_top200location" id="" value="new-york">
		<input type="checkbox" name="filter_top200location" id="" value="scottdale">
		<input type="checkbox" name="filter_collectingarea" id="" value="llamas">
		<input type="checkbox" name="filter_collectingarea" id="" value="coffee">
		<button class="js-ProfileFilter-submit" type="submit"></button>
	</form>

	<div class="js-ProfileFilter-results">
		<ul>
			<li></li>
			<li></li>
		</ul>
	</div>

	<button class="js-ProfileFilter-loadMore"></button>
</div>
`;

describe( 'initProfileFilter', () => {
	initProfileFilter();

	it( 'initializes the class', () => {
		const obj =
			document.querySelector( '.js-ProfileFilter' ).pmcProfileFilter;

		assert.equal( typeof obj, 'object' );
	} );
} );

describe( 'ProfileFilter', () => {
	const pf = new ProfileFilter(
		document.querySelector( '.js-ProfileFilter' )
	);

	const allCheckboxes = [
		...document.querySelectorAll( 'input[type="checkbox"]' ),
	];

	const checkedBoxes = [
		allCheckboxes[ 2 ], // top200location, new-york
		allCheckboxes[ 4 ], // collectingarea, llamas
		allCheckboxes[ 5 ], // collectingarea, coffee
	];

	it( 'gets initial query from url', () => {
		// let obj = document.querySelector( '.js-ProfileFilter' ).pmcProfileFilter;
		const windowLocationSearchMock = '?filter_top200year=2020%2C2019';
		const expectedObject = {
			page: 1,
			filter_top200year: [ '2020', '2019' ],
		};

		pf.setQueryObject( windowLocationSearchMock );

		assert.deepStrictEqual( pf.queryObject, expectedObject );
	} );

	it( 'gets checked boxes', () => {
		checkedBoxes.forEach( ( box ) => {
			box.setAttribute( 'checked', true );
		} );

		assert.deepEqual( pf.getCheckedBoxes(), checkedBoxes );
	} );

	it( 'getCheckedBoxes returns array', () => {
		assert.equal( Array.isArray( pf.getCheckedBoxes() ), true );
	} );

	it( 'gets the url from form action attr', () => {
		assert.equal( pf.actionUrl, pf.form.getAttribute( 'action' ) );
	} );

	it( 'clears the results container', () => {
		pf.clearResults();

		assert.equal( pf.resultContainer.innerHTML, '' );
	} );

	it( 'creates an object with the names/values from checked boxes', () => {
		const expectedObject = {
			filter_top200location: [ 'new-york' ],
			filter_collectingarea: [ 'llamas', 'coffee' ],
			page: 1,
		};

		pf.setQueryObject();

		// Based on checked boxes above.
		assert.deepStrictEqual( pf.queryObject, expectedObject );
	} );

	it( 'creates query string from the object', () => {
		const expectedUrl =
			'filter_top200location=new-york&filter_collectingarea=llamas%2Ccoffee&page=1'; // comma is encoded

		assert.equal( pf.createQueryStringFromObject(), expectedUrl );
	} );

	it( 'updates the action URL', () => {
		const expectedUrl =
			pf.actionUrl +
			'?filter_top200location=new-york&filter_collectingarea=llamas%2Ccoffee&page=1'; // comma is encoded

		pf.updateActionAttr();

		assert.equal( pf.form.getAttribute( 'action' ), expectedUrl );
	} );

	it( 'gets url to fetch from rest api', () => {
		const expectedUrl =
			pf.restUrlBase +
			'?top200location=new-york&collectingarea=llamas%2Ccoffee&page=1'; // comma is encoded

		assert.equal( pf.getRestEndpointUrl(), expectedUrl );
	} );

	it( 'increments the paged value when clicked', () => {
		pf.increasePage();

		assert.equal( pf.page, 2 );
	} );

	it( 'updates the fetch url with new paged value', () => {
		const expectedUrl =
			pf.restUrlBase +
			'?top200location=new-york&collectingarea=llamas%2Ccoffee&page=2'; // comma is encoded
		const searchUrlStub =
			'?filter_top200location=new-york&filter_collectingarea=llamas%2Ccoffee&page=1';

		pf.setQueryObject( searchUrlStub ); // This would be called by loadMoreClick

		assert.equal( pf.getRestEndpointUrl(), expectedUrl );
	} );

	it( 'hides load more if on same page', () => {
		pf.maxPages = 2; // this.queryObject.page is currently 2
		pf.maybeHideLoadMore();

		assert.equal(
			pf.loadMoreButton.classList.contains( 'a-hidden' ),
			true
		);
	} );

	it( 'shows load more if there are more pages', () => {
		pf.maxPages = 6; // this.queryObject.page is currently 2
		pf.maybeHideLoadMore();

		assert.equal(
			pf.loadMoreButton.classList.contains( 'a-hidden' ),
			false
		);
	} );
} );
