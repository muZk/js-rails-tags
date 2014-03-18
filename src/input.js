var tag = require('./tag').tag,
    parseNameAttr = require('./parse_html_options').parseNameAttr,
    parseIdInputs = require('./parse_html_options').parseIdInputs;


var input = function(type){
	return function(name, value, html_options){

        if(arguments.length < 1)
            throw new Error("input should recive 1 or more parameters ["+name+"]");

        if(typeof value === 'object'){
            html_options = value;
            value = null;
        }

		html_options = html_options || {};
        html_options.value = value || '';
        html_options.name = parseNameAttr(name);
		html_options.type = type;

        var id = parseIdInputs(name);
        if(id)
            html_options.id = html_options.id || id;

		return tag('input',html_options);
	};
};

/**
 * Exports
 */

exports.email_tag = input('email');
exports.text_tag = input('text');
exports.password_tag = input('password');
exports.submit_tag = input('submit');
exports.number_tag = input('number');
exports.file_tag = input('file');
exports.date_tag = input('date');
exports.hidden_tag = input('hidden');