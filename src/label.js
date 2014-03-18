var Tag = require('./tag');
var tag = Tag.tag,
	tag_end = Tag.tag_end,
	parseIdInputs = require('./parse_html_options').parseIdInputs;

var labelTag = function(labelFor, content, htmlOptions){

	if(arguments.length < 2)
		throw new Error("label_tag require at least 2 parameters");

	htmlOptions = htmlOptions || {};

	htmlOptions['for'] = parseIdInputs(labelFor);

	return tag('label', htmlOptions) + content + tag_end('label');
}

exports.label = labelTag;