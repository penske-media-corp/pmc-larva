const clonedeep = require( 'lodash.clonedeep' );
const pullquote = clonedeep( require( './pullquote.prototype' ) );

pullquote.pullquote_classes += ' memo';
module.exports = pullquote;
