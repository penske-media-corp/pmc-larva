import ajaxIconSprite from '@larva-js/utils/ajaxIconSprite';
import initFlickity from '@larva-js/interface/Flickity';
import initVideoShowcase from '@larva-js/interface/VideoShowcase';
import initCollapsible from '@larva-js/interface/Collapsible';

ajaxIconSprite( '/assets/build/svg/defs/sprite.defs.svg' );

// eslint-disable-next-line @wordpress/no-global-event-listener
document.addEventListener( 'DOMContentLoaded', () => {
	initCollapsible();
	initFlickity();
	initVideoShowcase();
} );
