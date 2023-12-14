const clonedeep = require( 'lodash.clonedeep' );

const paragraph_prototype = require( './paragraph.prototype' );
const paragraph_narrow = clonedeep( paragraph_prototype );

paragraph_narrow.paragraph_classes += ' lrv-u-width-75p';

module.exports = paragraph_narrow;
