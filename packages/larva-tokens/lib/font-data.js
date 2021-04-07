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

export const familyGroups = families.map( name => {
	return weights.map( weight => `${name}_${weight ? weight + '_' : ''}` );
});

export const allAllowedNames = families.map( name => {
	return weights.map( weight => {
		return sizes.map( size => `${name}_${weight ? weight + '_' : ''}${size}` ).flat();
	}).flat();
}).flat();

export const allAllowedTokens = allAllowedNames.map( name => {
		return breakpoints.map( breakpoint => `${name}_${breakpoint}` ).flat();
}).flat();
