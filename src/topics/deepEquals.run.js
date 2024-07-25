import deepEquals from "./deepEquals.js";


console.log("===== TRUE =======");
console.log(deepEquals(1, 1));
console.log(deepEquals('a string', "a string") + " : string, string");
console.log(deepEquals(NaN, NaN) + " : NaN, NaN");
console.log(deepEquals(undefined, undefined) + " : undefined, undefined");
console.log(deepEquals(null, null) + " : null, null");
console.log(deepEquals([],[]) + " : [],[]");
console.log(deepEquals([1, 2, 3], [1, 2, 3]));
console.log(deepEquals({},{}));
console.log(deepEquals({a: 1, b: "2"},{a: 1, b: "2"}));

const arr = new Array(100000).fill('a');
console.log(deepEquals(arr, arr));

console.log("===== FALSE =======");
console.log(deepEquals(1, 2));
console.log(deepEquals('string', "String"));
console.log(deepEquals([1, 2, 3], ['1', '2', '3']));
console.log(deepEquals({a: 1, b: "2"},{a: 1, b: "3"}));

// ===== experiment ===


/*
const v1 = ['a', 'b'];
const v1Type = typeof v1;
console.log(typeof v1Type); // string
console.log(v1Type); // object

console.log("----- typeof: ");
console.log(typeof []); // object
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof NaN); // number
let utc = Date.UTC(); // Date.UTC() returns the number of milliseconds between a date and January 1, 1970, according to UTC. 
console.log(utc); // NaN - must pass a date to the UTC function. Ex: let ms = Date.UTC(2020, 02, 30); 
console.log(typeof utc); // number
let now = Date.now(); // Date.now() returns the number of milliseconds since the epoch: January 1, 1970.
console.log(now); // 1721843359610 ms 
console.log(typeof now); // number
let n = new Date();
console.log(n); // 2024-07-24T17:49:19.610Z
console.log(typeof n); // object

let bd = new Date(2012, 7, 22);
console.log(typeof bd); // object

let bd2 = new Date(2012, 7, 22);

console.log("----- strict equals: ");
console.log(bd === bd2); // false
console.log(bd == bd2); // false
console.log(undefined === undefined); // true
console.log(null === null); // true
//console.log("s" === "S"); // false
console.log("NaN === NaN > " + (NaN === NaN)); // NaN === NaN > false

console.log(typeof 'String'); // string
console.log("String" === "String"); // true
console.log("String" === 'string'); // false

console.log(isNaN("a string")); // true
console.log(isNaN('')); // false
console.log(typeof true); // boolean
console.log(isNaN(true)); // false
console.log(isNaN(false)); // false
*/