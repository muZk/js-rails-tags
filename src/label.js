var Tag = require('./tag');
var tag = Tag.tag,
	tag_end = Tag.tag_end;

var labelTag = function(labelFor, content, htmlOptions){

	if(arguments.length < 2)
		throw new Error("label_tag require at least 2 parameters");

	if(!htmlOptions)
		htmlOptions = content || {};

	if(!labelFor)
		labelFor = '';

	htmlOptions['for'] = labelFor;

	return tag('label', htmlOptions) + content + tag_end('label');
}

exports.label = label_tag;