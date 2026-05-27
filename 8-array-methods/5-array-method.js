let arr = [10, 20, 30, 20, 40, 50, 10];

console.log("Original Array :", arr);


// --------------------------------------------------
// indexOf()
// Finds first occurrence from left to right
//--->
let newIndex1 = arr.indexOf(10, 2);

console.log("\nindexOf(10, 2) :", newIndex1);
// OUTPUT : 6
// Explanation : Search starts from index 2, first 10 found at index 6


let newIndex2 = arr.indexOf(20, -4);

console.log("\nindexOf(20, -4) :", newIndex2);
// OUTPUT : 3
// Explanation : -4 means start from array length-4 → index 3


let newIndex3 = arr.indexOf(20, 0);

console.log("\nindexOf(20, 0) :", newIndex3);
// OUTPUT : 1
// Explanation : Search starts from index 0, first 20 found at index 1


// --------------------------------------------------
// lastIndexOf()
// Finds occurrence from right to left
let arr = [10, 20, 30, 20, 40, 50, 10];
//<---
let findIndexFromLast1 = arr.lastIndexOf(10);

console.log("\nlastIndexOf(10) :", findIndexFromLast1);
// OUTPUT : 6
// Explanation : Last 10 found at index 6


let findIndexFromLast2 = arr.lastIndexOf(20);

console.log("\nlastIndexOf(20) :", findIndexFromLast2);
// OUTPUT : 3
// Explanation : Last 20 found at index 3


let findIndexFromLast3 = arr.lastIndexOf(20, -5);

console.log("\nlastIndexOf(20, -5) :", findIndexFromLast3);
// OUTPUT : 1
// Explanation : -5 means start searching backward from index 2


let findIndexFromLast4 = arr.lastIndexOf(20, 0);

console.log("\nlastIndexOf(20, 0) :", findIndexFromLast4);
// OUTPUT : -1
// Explanation : Search backward starts at index 0, 20 not found