// Spread and Rest Operators (...)

//ES6 edition

// Spread expands elements.

// Rest collects elements.

// Spread
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1,2,3,4,5]

// problem in reference type
// var arr=[10,20,30];
// var newarr=arr
// newarr[0]=40 //then arr[0] will be changed because it holds same memory addresss //call by reference



let user = {
   name: "John"
};

let updated = {
   ...user,
   age: 25
};

console.log(updated); // { name: "John", age: 25 }

// Rest
function para(a,b,...arr){
   console.log(a,b,arr);
}
para(1,2,3.4,5);
//rest operator collect the data and it will be the last in the parameter and
//  it do not all any other parameter after that


// Feature	Spread	Rest
// Symbol	...	...
// Purpose	Expand	Collect
// Output	Individual values	Array