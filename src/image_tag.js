/**
 * Created by muzk on 12/28/13.
 */

var Tag = require('./tag');
var tag = Tag.tag,
    tag_end = Tag.tag_end;

exports.image_tag = function(path, htmlOptions){
    htmlOptions = htmlOptions || {};
    htmlOptions.src = path;
    return tag('img',htmlOptions);
};