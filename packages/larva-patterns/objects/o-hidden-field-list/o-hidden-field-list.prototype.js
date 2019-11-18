const clonedeep = require("lodash.clonedeep");

const c_hidden_field_prototype = require("../../components/c-hidden-field/c-hidden-field.prototype");
const c_hidden_field = clonedeep(c_hidden_field_prototype);

module.exports = {
	o_hidden_field_list_items: [c_hidden_field, c_hidden_field, c_hidden_field]
};
