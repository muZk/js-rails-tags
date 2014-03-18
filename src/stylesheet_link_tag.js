/**
 * Created by muzk on 12/28/13.
 */

var parseHtmlOptions = require('./parse_html_options');
var tag = require('./tag').tag;

exports.stylesheet_link_tag = function(path, htmlOptions){
    htmlOptions = htmlOptions || {};
    htmlOptions.rel = "stylesheet";
    htmlOptions.type = "text/css";
    htmlOptions.href = path;
    return tag('link', htmlOptions);
};