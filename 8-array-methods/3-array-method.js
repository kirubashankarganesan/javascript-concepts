let arr = [5,1,4,6,2,8,10,20,15,45,101,111,26,345, "&", " "]
//Sort in ASCII Order
//convert to string and then sort it
arr.sort()

console.log( arr );
// [
//   ' ', '&', 1,  10, 101, 111,
//   15,  2,   20, 26, 345, 4,
//   45,  5,   6,  8
// ]

let arr1 = [10,20,30,40,50]

arr1.reverse()

console.log( arr1 );
// [ 50, 40, 30, 20, 10 ]

console.log( arr1.includes( 11) );
//to check value is present 
//false