var Tag = require('./tag');
var tag = Tag.tag,
	tag_end = Tag.tag_end;

var content_tag = function(elementTag, content, htmlOptions){

	if(arguments.length < 1)
		throw new Error("content_tag require at least 1 parameter ");

	content = content || '';

	if(typeof content === 'object'){
		htmlOptions = content;
		content = '';
	}

	htmlOptions = htmlOptions || {};
	return tag(elementTag, htmlOptions) + content + tag_end(elementTag);
}

exports.content_tag = content_tag;