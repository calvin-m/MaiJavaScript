//import "clone-object.js";
console.log("Hello World!");

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