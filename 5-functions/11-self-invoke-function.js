//IIFE(self invoked function)

// A Self Invoked Function is a function that runs immediately after it is created.

// normal function

function hello() {
    console.log("Hello");
}
hello();
//hello

//iife

(function (){
    console.log("hello world");
})();

//hello world
//after executing it will be removed from memory

(function (name){
    console.log("hello world");
})("javascript");

//javascript

