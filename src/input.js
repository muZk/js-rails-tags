var tag = require('./tag').tag;

var input = function(type){
	return function(html_options){
		html_options = html_options || {};
		html_options['type'] = type;
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