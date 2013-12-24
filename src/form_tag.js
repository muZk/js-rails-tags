var Tag = require('./tag');
var tag = Tag.tag,
	tag_end = Tag.tag_end;

var formTag = function(url, htmlOptions){
	htmlOptions = htmlOptions || {};
	htmlOptions.method = htmlOptions.method || "POST";

	if(htmlOptions.multipart){
		htmlOptions.enctype = "multipart/form-data";
		delete htmlOptions.multipart;
	}

	htmlOptions["accept-charset"] = "UTF-8";

	htmlOptions.action = url;

};

var formEnd = function(){
	return tag_end('form');
};

exports.form_tag = formTag;
exports.form_end = formEnd;