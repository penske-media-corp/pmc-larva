/**
 * Profile Filter Functionality
 *
 * This script fetches posts from a REST API endpoint created in the PMC Profiles
 * plugin. It builds a query object based on selected checkboxes, and uses that
 * object to form the query for the posts, and an action URL that is added to
 * the form action for older browsers.
 *
 * wp.template is used to render the data.
 *
 * The required selectors for this script are:
 * - .js-ProfileFilter - added to the element containing both the filter form and results
 * - .js-ProfileFilter-results - the container that holds results
 * - .js-ProfileFilter-form - added to the form element containing the input checkboxes
 * - .js-ProfileFilter-submit - the button that will submit the form, or fetch the posts
 * - .js-ProfileFilter-loadMore - button to load next set page of results
 *
 * @since 12-10-2019 Lara Schenck
 */

export default class ProfileFilter {
	constructor( el ) {
		this.el = el;
		this.el.pmcProfileFilter = this;

		// UI
		this.resultContainer = this.el.querySelector(
			'.js-ProfileFilter-results'
		);
		this.form = this.el.querySelector( '.js-ProfileFilter-form' );
		this.loadMoreButton = this.el.querySelector(
			'.js-ProfileFilter-loadMore'
		);

		this.submitButton = this.form.querySelector(
			'.js-ProfileFilter-submit'
		);

		// Event handlers
		this.onSubmit = this.onSubmit.bind( this );
		this.el.addEventListener( 'submit', this.onSubmit );

		this.onLoadMoreClick = this.onLoadMoreClick.bind( this );
		this.loadMoreButton.addEventListener( 'click', this.onLoadMoreClick );

		// Caching the URL set initially in the template. This should not be overwritten.
		this.actionUrl = this.form.getAttribute( 'action' );

		// The endpoint where we will fetch the posts
		this.restUrlBase =
			window.location.origin +
			'/wp-json/pmc_core/v1/pmc_core_modules/pmc-profiles';

		// Object to hold the data from which we will create the request URL.
		// This should be created fresh each time it is used with this.setQueryObject
		this.queryObject = {};

		this.page = 1;
		this.maxPages = Number;

		if ( undefined !== window.wp ) {
			this.template = wp.template( 'profile-card' );
		}
	}

	getCheckedBoxes() {
		return [
			...this.form.querySelectorAll( 'input[type="checkbox"]:checked' ),
		];
	}

	setQueryObject( url = false ) {
		const els = this.getCheckedBoxes();

		// Get query from checkboxes, if they are checked,
		// otherwise get query from URL
		if ( els.length && false === url ) {
			this.setQueryObjectFromCheckboxes( els );
		} else {
			this.setQueryObjectFromUrl( url );
		}

		this.queryObject.page = this.page;
	}

	setQueryObjectFromCheckboxes( els ) {
		const obj = {};

		els.map( ( el ) => {
			// If the key doesn't exist, create it
			const key = el.getAttribute( 'name' );

			if ( ! ( key in obj ) ) {
				obj[ key ] = [];
			}

			// Add the value to the array
			obj[ key ].push( el.getAttribute( 'value' ) );
		} );

		this.queryObject = Object.assign( {}, obj );
	}

	// filterQueryString should be window.location.search, e.g. ?filter_top200location=scottdale&filter_sourceofwealth=money
	setQueryObjectFromUrl( filterQueryString ) {
		const queryObject = {};

		const params = new URLSearchParams( filterQueryString );

		params.forEach( ( value, key ) => {
			const values = value.split( ',' );

			if ( ! ( key in queryObject ) ) {
				queryObject[ key ] = [];
			}

			queryObject[ key ] = [];
			queryObject[ key ].push( ...values );
		} );

		this.queryObject = Object.assign( {}, queryObject );
	}

	createQueryStringFromObject() {
		return new URLSearchParams( this.queryObject ).toString();
	}

	getRestEndpointUrl() {
		// REST params do not have filter_ prefix, so replace with empty string
		return (
			this.restUrlBase +
			'?' +
			this.createQueryStringFromObject().replace( /filter_/g, '' )
		);
	}

	updateActionAttr() {
		let url = '';
		url += this.actionUrl;
		url += '?' + this.createQueryStringFromObject();

		this.form.setAttribute( 'action', url );
	}

	onSubmit( e ) {
		this.resetPage();
		this.setQueryObject();
		this.updateActionAttr();

		// If fetch is supported, fetch posts from REST API endpoint, otherwise
		// we use default form behavior and window will reload to the action URL
		if ( window.fetch ) {
			e.preventDefault();

			// TODO: add better error handling - output result of e in updateResults
			this.fetchData().then( ( data ) => {
				this.maxPages = data.max_pages;
				this.updateResults( data.profile_list );
			} );
		}
	}

	onLoadMoreClick() {
		this.increasePage();
		this.setQueryObject( window.location.search );
		this.fetchData().then( ( data ) => {
			this.maxPages = data.max_pages;
			this.updateResults( data.profile_list, false );
		} );
	}

	fetchData() {
		const url = this.getRestEndpointUrl();

		const response = fetch( url )
			.then( ( result ) => {
				return result.json();
			} )
			.catch( ( e ) => e );

		return response;
	}

	clearResults() {
		this.resultContainer.innerHTML = '';
	}

	updateWindowUrl() {
		const url = '?' + this.createQueryStringFromObject();
		const obj = this.queryObject;

		if ( window.history.pushState ) {
			window.history.pushState( obj, '', url );
		}
	}

	updateResults( posts, shouldClearResults = true ) {
		this.maybeHideLoadMore( this.maxPages );

		// TODO: better as maybeClearResults func
		if ( shouldClearResults ) {
			this.clearResults();
		}

		this.updateWindowUrl();

		if ( undefined === posts[ 0 ].name ) {
			// Update with "No posts found" text and exit
			this.resultContainer.innerHTML = posts[ 0 ];
			return;
		}

		posts.forEach( ( post ) => {
			const tmpl = this.template( post );
			const li = document.createElement( 'li' );
			li.innerHTML = tmpl;

			// TODO: this should be removed upon finding solution for escaping {{data.url}} as an attribute
			// in profile-blurb > c-button.c_button_url
			li.querySelectorAll( 'a' ).forEach( ( link ) => {
				link.setAttribute( 'href', post.url );
			} );

			this.resultContainer.append( li );
		} );
	}

	maybeHideLoadMore() {
		const isHidden = this.loadMoreButton.classList.contains( 'a-hidden' );

		if ( this.maxPages > this.page ) {
			if ( isHidden ) {
				this.loadMoreButton.classList.remove( 'a-hidden' );
			}
		} else if ( ! isHidden ) {
			this.loadMoreButton.classList.add( 'a-hidden' );
		}
	}

	increasePage() {
		this.page++;
	}

	resetPage() {
		this.page = 1;
	}
}
