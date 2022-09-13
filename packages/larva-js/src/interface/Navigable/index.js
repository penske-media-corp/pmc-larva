import Navigable from './Navigable';

export default function initNavigable() {
	const oNavs = [ ...document.querySelectorAll( '.lrv-js-Navigable' ) ];

	if ( oNavs.length ) {
		oNavs.forEach( ( oNav ) => new Navigable( oNav ) );
	}
}
