// // ARRAY METHODS IN JAVASCRIPT

// // ---------------------------------------------
// // ORIGINAL ARRAY

// let arr = [100, 200, 300, 400];

// console.log("Original Array :", arr);


// // ---------------------------------------------
// // POP METHOD
// // Removes last element from array

// let poppedVal = arr.pop();

// console.log("\nPOP METHOD");
// console.log("Removed Value :", poppedVal);
// console.log("Array After Pop :", arr);


// // POP METHOD
// // Removed Value : 400
// // Array After Pop : [ 100, 200, 300 ]


// // ---------------------------------------------
// // PUSH METHOD
// // Adds element at the end

// arr.push(500, 550, 600);

// console.log("\nPUSH METHOD");
// console.log("Array After Push :", arr);

// // PUSH METHOD
// // Array After Push : [ 100, 200, 300, 500, 550, 600 ]

// // ---------------------------------------------
// // SHIFT METHOD
// // Removes first element

// let firstVal = arr.shift();

// console.log("\nSHIFT METHOD");
// console.log("Removed First Value :", firstVal);
// console.log("Array After Shift :", arr);

// // SHIFT METHOD
// // Removed First Value : 100
// // Array After Shift : [ 200, 300, 500, 550, 600 ]
// // ---------------------------------------------
// // UNSHIFT METHOD
// // Adds element at beginning

// arr.unshift(-2, -1, 0, 10, 20);

// console.log("\nUNSHIFT METHOD");
// console.log("Array After Unshift :", arr);


// // UNSHIFT METHOD
// // Array After Unshift : [
// //   -2, -1, 0, 10,
// //   20, 200, 300,
// //   500, 550, 600
// // ]

// // ---------------------------------------------
// // SPLICE METHOD
// // splice(start, deleteCount, items)

// // Creates new array

// let newArr = [10, 20, 30, 40];

// console.log("Original newArr :", newArr);


// // Original newArr : [ 10, 20, 30, 40 ]

// // ---------------------------------------------
// // splice(0,0,100,200,300)
// // Add values at index 0
// // deleteCount = 0 means nothing removed

// newArr.splice(0, 0, 100, 200, 300);

// console.log("\nSPLICE METHOD - INSERT AT START");
// console.log("Array :", newArr);


// // SPLICE METHOD - INSERT AT START
// // Array : [ 100, 200, 300, 10, 20, 30, 40 ]
// // ---------------------------------------------
// // splice(-1,0,500,600,700)
// // -1 means before last element

// newArr.splice(-1, 0, 500, 600, 700);

// console.log("\nSPLICE METHOD - INSERT BEFORE LAST");
// console.log("Array :", newArr);

// // SPLICE METHOD - INSERT BEFORE LAST
// // Array : [
// //   100, 200, 300,
// //   10, 20, 30,
// //   500, 600, 700,
// //   40
// // ]