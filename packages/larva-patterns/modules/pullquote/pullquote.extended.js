const clonedeep = require( 'lodash.clonedeep' );
const pullquote = clonedeep( require( './pullquote.prototype' ) );

pullquote.pullquote_classes += ' extended';

module.exports = pullquote;
