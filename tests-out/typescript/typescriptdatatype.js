"use strict";
//1. datatype - Undefined
let data = undefined;
console.log(data);
//2. datatype - any(accept any datatype)
let data2 = 1234;
data2 = 'swathi';
data2 = true;
console.log(data2);
//3. datatype -unkown (accept any datatype but check for datatype before performing any action)
let data3 = 'devi';
data3 = 9080;
/* //  if we want to add 30 to data3, then it will throw error. always we have to add a check logic
// for unknown datatype */
if (data3 == Number) {
}
//4. datatype - never (if we want an infinite looping which does not end)
/*5.  datatype -Tuple - Tuples in TypeScript are a special type of array that allows you to store a
fixed number of elements where each element can have a different type. */
let data4 = ['swathi', 100, true];
console.log(data4);
data4.push('Midhu', 200, true);
console.log(data4);
//# sourceMappingURL=typescriptdatatype.js.map