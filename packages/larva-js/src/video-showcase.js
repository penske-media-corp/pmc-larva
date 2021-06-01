import initCollapsible from './interface/Collapsible';
import initFlickity from './interface/Flickity';
import initVideoShowcase from './interface/VideoShowcase';

// This rule is meant for React components.
// eslint-disable-next-line @wordpress/no-global-event-listener
document.addEventListener( 'DOMContentLoaded', () => {
	initCollapsible();
	initFlickity();
	initVideoShowcase();
} );
