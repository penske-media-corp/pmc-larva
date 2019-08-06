import initDropdowns from './interface/MobileHeightToggle/index';

const onSafeResize = function() {
	initDropdowns( window.innerWidth );
};

window.addEventListener( 'load', () => {
	onSafeResize();
});

window.addEventListener( 'resize', () => {
	onSafeResize();
});