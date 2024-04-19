import { getTextJsx, setFile, convert } from "./core.js"
import { parse } from "node-html-parser"

let exp = /\(\s*(<.*?>)\)/gs

let str = getTextJsx("./src/main.jsx");
let res = null

while (res = exp.exec(str)) { 
    let text = res[1]
let root = parse(text.replace(/\n/g,"")) 
 str = str.replace(res[1], convert(root.firstChild))
}

setFile(str);


