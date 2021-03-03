import initDropdowns from './interface/MobileHeightToggle/index';
import initEmailCaptures from './interface/EmailCapture/index';

const onSafeResize = function () {
	initDropdowns( window.innerWidth );
};

window.addEventListener( 'DOMContentLoaded', () => {
	onSafeResize();
	initEmailCaptures();
} );

window.addEventListener( 'resize', () => {
	onSafeResize();
} );
