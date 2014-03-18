var BOOLEAN_ATTRIBUTES = 'disabled readonly multiple checked autobuffer'+
						 'autoplay controls loop selected hidden scoped async'+
						 'defer reversed ismap seemless muted required'+
						 'autofocus novalidate formnovalidate open pubdate itemscope';

var booleansAttrs = BOOLEAN_ATTRIBUTES.split(' ');

var parseHtmlOptions = function(htmlOptions){
	if(!htmlOptions)
		return '';

	htmlAttributes = '';
	htmlOptions.data = htmlOptions.data || {};

	// Confirm option
	if(htmlOptions.confirm){
		htmlOptions.data.confirm = htmlOptions.confirm;
		delete htmlOptions.confirm;
	}

    if(htmlOptions.method){
        htmlOptions.data.method = htmlOptions.method;
    }

	// Remote option
	if(htmlOptions.remote === true){
		htmlOptions.data.remote = "true";
		delete htmlOptions.remote;
	}

	// Boolean attributes
	changeBooleanAttrs(htmlOptions);

	// Parse data attributes
	var dataAttributes = parseData(htmlOptions.data);
	delete htmlOptions.data;

	// Parse the rest of attributes
	for(var attr in htmlOptions)
		if(attr !== '_keys')
			htmlAttributes += createAttr(attr, htmlOptions[attr]);

	return htmlAttributes + dataAttributes;
};

var changeBooleanAttrs = function(htmlOptions){
	for(var attr in htmlOptions)
		if(booleansAttrs.indexOf(attr) !== -1 && htmlOptions[attr] === true)
			htmlOptions[attr] = attr;
};

var parseData = function(data){
	var htmlAttributes = '';
	for(var attr in data)
		htmlAttributes += createAttr("data-"+attr, data[attr]);
	return htmlAttributes;
};

var createAttr = function(attr, value){
	return ' '+attr+"='"+value+"'";
};

var parseNameAttr = function(name){
	if(typeof name === 'object'){
		for(var attr in name){
			if(attr != '_keys')
				return attr+'['+name[attr]+']';
		}
	} else {
		if(name.indexOf('.') !== -1){
			var splitedName = name.split('.');
			return splitedName[0] + '[' + splitedName[1] + ']';
		}
	}
	return name;
};

var parseIdInputs = function(name){
	if(typeof name === 'object'){
		var id = '';
		for(attr in name){
			if(attr != '_keys')
				id += attr +'_'+name[attr]; 
		}
		return id;
	} else {
		if(name.indexOf('.') !== -1){
			var splitedName = name.split('.');
			return splitedName[0] + '_' + splitedName[1];
		}
	}
	return name;
};

/**
 * Export helpers.
 */

exports.parseHtmlOptions = parseHtmlOptions;
exports.parseNameAttr = parseNameAttr;
exports.parseIdInputs = parseIdInputs;