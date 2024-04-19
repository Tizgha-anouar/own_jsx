
import * as fs from "fs"
import { parseText}  from "./utilits.js"


function getTextJsx(filename) { 
return fs.readFileSync(filename, 'utf8');
}
function setFile(data) { 
    fs.writeFileSync("./src/output.js", data);
}
function convert(root) { 

    let children = [];

    if (root.childNodes.length > 0) { 
        children = root.childNodes.map(element => {
            return convert(element)
        }).filter(ele => ele != null);

    }

    // find the node text
    //https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
    if (root.nodeType == 3) { 
        if (root._rawText.trim() == "") return null;
        
        return parseText(root._rawText);
    }

    //find element and get info

    let tagName = root.tagName;

    let attrs = root.rawAttrs;
    if (attrs == "") { 
        attrs = "{}";
    }
    return `(createElement("${tagName}", ${attrs}, ${children}))`;    

    //old way
    //let attrs = getAttrs(root.rawAttrs)
    //return `(createElement("${tagName}", ${attrs_interpolation(JSON.stringify(attrs,replacer))}, ${children}))`;

    

}
export {getTextJsx,setFile,convert }
