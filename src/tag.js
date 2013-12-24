var parseHtmlOptions = require('./parse_html_options').parseHtmlOptions;

var tag = function(tag, htmlOptions, end) {
	end = end || '>';
	return '<'+tag+parseHtmlOptions(htmlOptions)+end;
};

var tagEnd = function(tag){
	return '</'+tag+'>';
};

/**
 * Export helpers.
 */

exports.tag = tag;
exports.tag_end = tagEnd;