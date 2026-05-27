// // types of function
//         // 1. named function
//          function display(){
//             console.log("hi");
//          }
//          display();
//         // 2. anonymous function
//          var say_hello=function(){
//             alert("hello");
//          }  
//          say_hello();
//          //keyword is present
//          //no function name

//         // 3. arrow function
//         var a,b;
//          const sum=(a,b)=>a+b;
//          sum();
//           //no keyword 
//          //no function name


let anon= function(a,b){
    console.log(a*b);
}
anon(10,20);//compulsory curly barse needed

let add=(a,b)=>console.log(a+b);
add(10,20);

let fname=(name)=> name;
var res=fname("javascript");
console.log(res);
//no need for return keyword