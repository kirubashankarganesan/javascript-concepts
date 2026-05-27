// dense and sparse array

// 1. dense array 

let arr=[1,2,3,4,5]
        //  1004 1008 1012  1016 1020

// it can be calculated using formula

// formula = baseaddress + ( index + size)
        //   1004 + (0+ 4(byte))=1004
//contigous memory allocation

// 2. sparse array

var arr1=[1,,2,3,4,,6];
console.log(arr1);
// [ 1, <1 empty item>, 2, 3, 4, <1 empty item>, 6 ]
// uses hash table or hash map to store value
