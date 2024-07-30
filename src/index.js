import {debugHelper, l, w, e} from "./libs/debug-helper.js";
//import * as debugHelper from "./libs/debug-helper.js";



l("Hello World! The debug flag is set to: " + debugHelper.isDebugEnabled());
w("warning");
e("error");
debugHelper.disableDebug();; // TypeError: Assignment to constant variable
l("DEBUG is set to false     from l()"); // these will not be output since the debug flag is set to false
w("warning2");
e("error2");
console.log("DebugFlag: " + debugHelper.isDebugEnabled()); // DebugFlag: false

console.log(isNaN("string")); // true
console.log(isNaN(NaN)); // true

const obj = {a: 1, b: {
    b1: 1,
    b2: "2"
}};

console.log(obj);
console.log(Object.entries(obj)); // [ [ 'a', 1 ], [ 'b', { b1: 1, b2: '2' } ] ]
console.log(Object.keys(obj)); // [ 'a', 'b' ]



let p = 1
let q = p;
p=2;
console.log("p: " + p + "; q: " + q); //p: 2; q: 1