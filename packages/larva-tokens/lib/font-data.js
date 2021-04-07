const { kebabify } = require( './utils' );

export const families = [
	'primary',
	'secondary',
	'accent',
	'body',
	'basic'
];

export const weights = [
	'regular',
	'bold',
	'medium',
	''
];

export const sizes = [
	'xxxl',
	'xxl',
	'xl',
	'l',
	'm',
	's',
	'xs',
	'xxs',
	'xxxs'
];

export const breakpoints = [
	'mobile',
	'desktop',
	'desktopxl'
];

export const properties = [
	'font_size',
	'line_height',
	'letter_spacing',
	'font_weight'
];

export const allAllowedNames = families.map( name => {
	return weights.map( weight => {
		return sizes.map( size => `${name}_${weight ? weight + '_' : ''}${size}` ).flat();
	}).flat();
}).flat();

export const allAllowedTokens = allAllowedNames.map( name => {
		return breakpoints.map( breakpoint => `${name}_${breakpoint}` ).flat();
}).flat();

export const PREFIX = 'lrv-a-font';

export const allSelectors = allAllowedNames.reduce( ( acc, curr ) => {
	const selector = PREFIX.concat( '-', kebabify(curr) );
	acc.push( selector );

	return acc;
}, [] );

export const groupedSelectors = (() => {
	const groups = families.map( name => {
		return weights.map( weight => `${name}${weight ?  '-' + weight : ''}` );
	}).flat();

	return groups.reduce( ( groupsObj, groupName ) => {

		// https://regex101.com/r/MLRVk2/1
		const pattern = new RegExp( `${groupName}-(s|m|l|x)`, 'g' );

		if ( ! groupsObj.hasOwnProperty( groupName ) ) {
			groupsObj[groupName] = [];
		}

		allSelectors.map( selector => {
			if ( selector.match( pattern ) ) {
				groupsObj[groupName].push( selector );
			}
		});

		return groupsObj;
	}, {} );
})();
