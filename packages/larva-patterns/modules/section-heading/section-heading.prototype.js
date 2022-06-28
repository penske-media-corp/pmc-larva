const clonedeep = require('lodash.clonedeep');

const c_heading = clonedeep(require('@penskemediacorp/larva-patterns/components/c-heading/c-heading.prototype'));
const c_dek = clonedeep(require('@penskemediacorp/larva-patterns/components/c-dek/c-dek.prototype'));

c_heading.c_heading_classes += ' lrv-a-font-primary-l lrv-u-margin-b-2';
c_heading.c_heading_text = 'Section Heading';

module.exports = {
	section_heading_class: '',
	c_heading,
	c_dek
};
