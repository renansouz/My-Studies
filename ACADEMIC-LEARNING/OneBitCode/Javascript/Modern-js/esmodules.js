import { ola, name } from "./esfunctions.js"
import defaultInline, { inline as i } from "./esmodulesInline.js"
import naoLembro, { group } from "./esmodulesNon-Inline.js"

console.log(ola(name));
console.log(i());
console.log(defaultInline());
console.log(group());
console.log(naoLembro());