import initDropdowns from './interface/Dropdown/index';

const onSafeResize = function() {
	const width = window.innerWidth;

	initDropdowns( width );
};

window.addEventListener( 'load', () => {
	onSafeResize();
});