const arr = [1, 2, 3];
arr.push(4);
let item = arr.pop(); // last item: 4
console.log(item); // 4
console.log(arr); 

// FROM Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// The 2 in year[2] is coerced into a string by the JavaScript engine through an implicit toString conversion.
console.log(arr[1]); // 2
console.log(arr["1"]); // 2
console.log(arr[0] === arr['0']); // true