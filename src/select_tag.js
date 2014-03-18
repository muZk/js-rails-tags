var content_tag = require('./content').content_tag,
    parseNameAttr = require('./parse_html_options').parseNameAttr,
    parseIdInputs = require('./parse_html_options').parseIdInputs;

var option_tag = function(name, value, htmlOptions){
    htmlOptions = htmlOptions || {};
    if(value)
        htmlOptions.value = value;
    return content_tag('option', name, htmlOptions);
};

exports.option_tag = option_tag;

exports.select_tag = function(name, optionTags, htmlOptions){
    htmlOptions = htmlOptions || {};
    htmlOptions.name = parseNameAttr(name);
    htmlOptions.id = htmlOptions.id || parseIdInputs(name);
    return content_tag('select', optionTags, htmlOptions);
};

exports.options_for_select = function(container, selected){

    if(typeof container === 'string')
        return container;

    var arrayContent = [];
    if(typeof container === 'object' && !Array.isArray(container)){
        for(var attr in container){
            if(attr !== '_keys'){
                arrayContent.push([ attr, container[attr] ])
            }
        }
    } else {
        arrayContent = container;
    }

    var options = '';
    for(var i = 0; i < arrayContent.length; i++){

        var element = arrayContent[i];
        var name = element;
        var value = '';

        if(Array.isArray(element)){
            name = element[0];
            value = element[1];
        }

        if(typeof selected !== 'undefined' && selected == value)
            options += option_tag(name, value, { selected: true });
        else
            options += option_tag(name, value);

    }

    return options;

};

