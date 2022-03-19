import ajaxIconSprite from '@larva-js/utils/ajaxIconSprite';
import initFlickity from '@larva-js/interface/Flickity';
import initVideoShowcase from '@larva-js/interface/VideoShowcase';
import initCollapsible from '@larva-js/interface/Collapsible';
import initPopOver from '@larva-js/interface/PopOver';

const spritePath = ( () => {
	if ( undefined !== window.pmc_common_urls ) {
		return (
			window.pmc_common_urls.pmc_larva_uri +
			'/build/svg/defs/sprite.defs.svg'
		);
	}
	return '/assets/build/svg/defs/sprite.defs.svg';
} )();

ajaxIconSprite( spritePath );

// eslint-disable-next-line @wordpress/no-global-event-listener
document.addEventListener( 'DOMContentLoaded', () => {
	initCollapsible();
	initFlickity();
	initVideoShowcase();
	initPopOver();
} );
