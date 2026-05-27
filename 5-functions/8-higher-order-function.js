// function function1(){
//     console.log("fun1");
// }
// function function2(){
//     console.log("fun2");
// }

// function1(function2());
//fun2 
//fun1

//fun1 is higher order function 
//func2 is call back function



function add( callBack,a,b ){
    callBack(100,200)
    console.log( a + b );
}
function subtract(num1, num2) {
    console.log( num1+num2 );
}
add( subtract,20,40  )