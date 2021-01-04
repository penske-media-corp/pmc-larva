// This would be
// const { c_label } = require( '@penskemediacorp/larva' );
const { c_label } = require( '../../index' );

c_label.options.tag_text = 'div';

module.exports = c_label.get();