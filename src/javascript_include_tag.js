var parseHtmlOptions = require('./parse_html_options');
var Tag = require('./tag');
var tag = Tag.tag,
    tag_end = Tag.tag_end;

exports.javascript_include_tag = function(path, htmlOptions){
    htmlOptions = htmlOptions || {};
    htmlOptions.type = "text/javascript";
    htmlOptions.src = path;
    return tag('script', htmlOptions)+tag_end('script');
};