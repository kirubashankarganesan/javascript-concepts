// CONCAT METHOD
// Combines arrays or values

let arr = [1, 2, 3, 4];
let arr1 = [4, 5, 6, 7];

let newArr = arr.concat(arr1);
let newArr1 = arr.concat(10, 20, 30);
let newArr2 = [].concat(arr);

arr[0] = 111;

console.log("\nCONCAT METHOD");

console.log("newArr :", newArr);
// OUTPUT : [ 1, 2, 3, 4, 4, 5, 6, 7 ]

console.log("newArr1 :", newArr1);
// OUTPUT : [ 1, 2, 3, 4, 10, 20, 30 ]

console.log("newArr2 :", newArr2);
// OUTPUT : [ 1, 2, 3, 4 ]

console.log("Original arr :", arr);
// OUTPUT : [ 111, 2, 3, 4 ]


// ------------------------------------------------------
// SLICE METHOD
// slice() is used to copy some part of an array.
// slice(start, end)
// end is excluded

let newArray = [10, 2, 3, 4, 5, 6, 7];

let slicedVal = newArray.slice();

newArray[0] = 101;

let slicedVal1 = newArray.slice(1);
let slicedVal2 = newArray.slice(1, 4);
let slicedVal3 = newArray.slice(0, 3);

console.log("\nSLICE METHOD");

console.log("slicedVal :", slicedVal);
// OUTPUT : [ 10, 2, 3, 4, 5, 6, 7 ]

console.log("slicedVal1 :", slicedVal1);
// OUTPUT : [ 2, 3, 4, 5, 6, 7 ]

console.log("slicedVal2 :", slicedVal2);
// OUTPUT : [ 2, 3, 4 ]

console.log("slicedVal3 :", slicedVal3);
// OUTPUT : [ 101, 2, 3 ]

console.log("Original newArray :", newArray);
// OUTPUT : [ 101, 2, 3, 4, 5, 6, 7 ]


// ------------------------------------------------------
// FLAT METHOD
// flat() removes nested brackets and converts nested array into single array.
// Converts nested array into single array

let flatArr = [1, 2, 3, [4, [5, 6, [40, 50, [70, 80]]]]];

let flat1 = flatArr.flat(2);//2 means: Remove only 2 levels of nesting

let flat2 = flatArr.flat(Infinity);//Remove ALL nested levels

console.log("\nFLAT METHOD");

console.log("Original Array :", flatArr);
// OUTPUT : [ 1, 2, 3, [ 4, [ 5, 6, [Array] ] ] ]

console.log("flat(2) :", flat1);
// [4, [5, 6, [40, 50, [70, 80]]]]
// 4, [5, 6, [40, 50, [70, 80]]]
// 5, 6, [40, 50, [70, 80]]
// OUTPUT : [ 1, 2, 3, 4, 5, 6, [ 40, 50, [ 70, 80 ] ] ]


console.log("flat(Infinity) :", flat2);
// OUTPUT : [ 1, 2, 3, 4, 5, 6, 40, 50, 70, 80 ]


// ------------------------------------------------------
// FILL METHOD
// fill() replaces array values with a specified value.
// fill(value, start, end)

let fillArr = [10, 20, 30];

fillArr.fill(101, 0, 2);
fillArr.fill(103, 2, 5);

console.log("\nFILL METHOD");

console.log("fillArr :", fillArr);
// OUTPUT : [ 101, 101, 103 ]