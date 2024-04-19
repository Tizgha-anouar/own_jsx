let interpolation_exp = /\{([a-zA-Z0-9]+)\}/gs
let interpolation_exp_function = /\{([a-zA-Z0-9]+\(?\)?)\}/g


function parseText(text) { 

    //find this type of implementation {namevariable}
    if (text.trim == "") return null;

    if (text.match(interpolation_exp)||text.match(interpolation_exp_function)) {
        text = text_interpolation(text);
    }
    return `"${text}"`; 
}

//old implementation of how to get attrs
function getAttrs(attrs) { 
    
    if (attrs.trim() == "") return {};
    let objAttr = {};
    let options = attrs.split(" ");

    options.forEach(element => {
        let [k, v] = element.split("=");
        objAttr[k] = v; 
    });
    return objAttr;
}
//interpolation attributes
function attrs_interpolation(attrs) {
    let res = null;
    while (res = interpolation_exp.exec(attrs)) { 
        attrs = attrs.replace(`"{${res[1]}}"`,`"${res[1]}"`)
    }
    return attrs;
}

function replacer(k, v) { 
//todo 
return v
}

function text_interpolation(text) {
    let res = null;
    while (res = interpolation_exp.exec(text)) { 
        text = text.replace(`{${res[1]}}`,`"+${res[1]}+"`)
    }
    while (res = interpolation_exp_function.exec(text)) { 
        text = text.replace(`{${res[1]}}`,`"+${res[1]}+"`)
    }
    return text;
}

//spread attribute of element
function spreadAttrs(attrs) {
    let keys = Object.keys(attrs)
    return `${
        keys.map(item => `${item} = "${attrs[item]}"`).join(" ")
    }`;

}
//final step to create element
//todo we can use pure vanilla javascript to create element
function createElement(tagName, attrs, ...children) { 

    return `
    <${tagName} ${spreadAttrs(attrs)}>
        ${children.join(" ")}
    </${tagName}>

    `
}

export {parseText, getAttrs, attrs_interpolation,replacer,spreadAttrs, createElement}