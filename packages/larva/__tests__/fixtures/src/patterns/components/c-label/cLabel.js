const Pattern = require( './Pattern' );

module.exports = class cLabel extends Pattern {
	constructor() {
		super();

		this.options = {
			text: 'Label Here',
			tag_text: 'span',
			id_attr: '',
			url: '#',
			link_classes: ''
		};

		this.namespace = 'c_label_';
	}

	sanitize() {
		if ( this.options.tag_text === 'poo' ) {
			throw new Error( 'no way!!' );
		}
	}
}
