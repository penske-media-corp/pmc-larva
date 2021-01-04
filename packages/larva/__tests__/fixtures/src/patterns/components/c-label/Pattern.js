module.exports = class Pattern {
	constructor() {
		this.options = {}
		this.namespace = ''
	}

	get() {

		const obj = {};

		this.sanitize();

		for ( const key in this.options ) {
			obj[ this.namespace + key ] = this.options[key];
		}

		return obj;
	}

	sanitize() {}
}
