import ajaxIconSprite from '@larva-js/utils/ajaxIconSprite';
import initFlickity from '@larva-js/interface/Flickity';
import initVideoShowcase from '@larva-js/interface/VideoShowcase';
import initCollapsible from '@larva-js/interface/Collapsible';
import initPopOver from '@larva-js/interface/PopOver';
import initTooltip from '@larva-js/interface/Tooltip';
import initExpandableSearch from '@larva-js/interface/ExpandableSearch';
import initHeader from '@larva-js/interface/Header';

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

const onSafeResize = function () {
	initHeader();
};

window.addEventListener( 'resize', () => {
	onSafeResize();
} );

// eslint-disable-next-line @wordpress/no-global-event-listener
document.addEventListener( 'DOMContentLoaded', () => {
	//document has been completely loaded and parsed
	initCollapsible();
	initFlickity();
	initVideoShowcase();
	initPopOver();
	onSafeResize();
} );

window.addEventListener( 'load', () => {
	//when the whole page has loaded
	initExpandableSearch();
	initTooltip();
} );
