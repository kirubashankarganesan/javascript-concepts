//Array Destructuring


// Destructuring means unpacking values from arrays or objects into separate variables.

// JavaScript has:
    //Array Destructuring
    //Object Destructuring



// let arr = [10,20,30,40,5,4,5,6,7,8,9,10]

// let fVal = arr[0]

// let [a,b,c,d] = arr
// let [a,,,d] = arr
// let [a1,a2,a3,...a4] = arr
//a4 store in array 

// console.log( a1,a2,a3, a4 );
//------------------------------------------------------

//Nested Array Destructuring

// let nestArr = [ 1,2,3,4, [10,20,[30,40]]  ]

// let [a,b,c,d,[a1,a2,[a11,a12]]] = nestArr

// console.log( d, a12 );// 4 40
