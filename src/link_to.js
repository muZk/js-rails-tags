var Tag = require('./tag');
var tag = Tag.tag,
	tag_end = Tag.tag_end;

var linkTo = function(name, url, html_options) {
	name = name || '';
	html_options = html_options || {};
	html_options.href=url;
	return tag('a', html_options)+name+ tag_end('a');
};

/**
 * Export helpers.
 */

exports.linkTo = link_to;