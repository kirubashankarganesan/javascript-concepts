// array is a data structure used to store a multiple value in a single variable
//can store a various datatypes in sample array
//it can hold a homogeneous and hetrogeneous values
//it can be access by their index,starting from zero
//array are flexible and you can add or remove element 


// array can be created in 2 ways
// 1. array literal
// 2. array constructor

// 1. array literal

let sample = [  1, "two", true, null, undefined, { id:1 } ]
console.log(sample);//[ 1, 'two', true, null, undefined, { id: 1 } ]


// 2. array constructor

let newArray = new Array();
newArray[0] = "First"
newArray[1] = "Second"
newArray[2] = "Third"
newArray[3] = "Fourth"
console.log(newArray);//[ 'First', 'Second', 'Third', 'Fourth' ]



var a=[1,2,3,4];
console.log(a[0]);//1
console.log(a.length);//4
console.log(a.length-1);//3