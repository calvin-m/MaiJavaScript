const originalObj = { a: 0, b: 2.5 };
console.log(originalObj);

// 1. spread operator
const c1 = { ...originalObj };
c1.foo = "FOO";
c1.a++;
console.log(c1); // { a: 1, b: 2.5, foo: 'FOO' }

// 2. Object.assign
const c2 = Object.assign({}, originalObj);
c2.a = 2;
c2.b = "changed type";
console.log(c2) // { a: 2, b: 'changed type' }


// 3. JSON serialization
const c3 =JSON.parse(JSON.stringify(originalObj));
c3.a = 3;
console.log(c3);

// 4. structuredClone
const c4 = structuredClone(originalObj);
c4.a = 4;
console.log(c4);

originalObj.a = -1;
console.log(originalObj);


const o2 = [1, 2, 3];
const c5 = [ ...o2 ];
o2[0] = 'a';
console.log(o2);
console.log(c5);