var Tag = require('./tag');

exports.button_tag = function(name,html_options){
    return Tag.tag('button',html_options)+name+Tag.tag_end('button');
};