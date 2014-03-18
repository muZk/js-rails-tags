var tag = require('./tag').tag,
	tag_end = require('./tag').tag_end,
	parseNameAttr = require('./parse_html_options').parseNameAttr,
    parseIdInputs = require('./parse_html_options').parseIdInputs;

exports.text_area_tag = function(name, value, htmlOptions){
	htmlOptions = htmlOptions || {};
	htmlOptions.name = parseNameAttr(name);
	var id = parseIdInputs(name);
	if(id)
		htmlOptions.id = htmlOptions.id || id;
	return tag('textarea',htmlOptions) + value + tag_end('textarea');
};