var Tag = require('./tag');
var tag = Tag.tag,
	tag_end = Tag.tag_end;

var linkTo = function(name, url, htmlOptions) {
	name = name || '';
	htmlOptions = htmlOptions || {};
	htmlOptions.href=url;
	return tag('a', htmlOptions)+name+ tag_end('a');
};

/**
 * Export helpers.
 */

exports.link_to = linkTo;