import ajaxIconSprite from '@larva-js/utils/ajaxIconSprite';
import initFlickity from '@larva-js/interface/Flickity';
import initVideoShowcase from '@larva-js/interface/VideoShowcase';


ajaxIconSprite( '/assets/build/svg/defs/sprite.defs.svg' );

initFlickity();
initVideoShowcase();

console.log( 'hi' );
