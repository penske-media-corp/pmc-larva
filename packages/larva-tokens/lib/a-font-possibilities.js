const families = [
	'primary',
	'secondary',
	'accent',
	'body',
	'basic'
];

const weights = [
	'regular',
	'medium',
	'bold',
	''
];

const sizes = [
	'xxs',
	'xs',
	's',
	'm',
	'l',
	'xl',
	'xxl',
	'xxxl'
];

const PREFIX = 'a-font';

const possibleNames = families.map( name => `${PREFIX}-${name}` )
							  .map( name => weights.map( weight => `${name}${weight ? '-' + weight : ''}` )
							  .map( name => sizes.map( size => `${name}-${size}` ) ).flat() );

module.exports = possibleNames;