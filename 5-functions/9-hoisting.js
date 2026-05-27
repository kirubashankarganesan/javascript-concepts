// Hoisting in JavaScript

// Hoisting means - JavaScript moves declarations to the top of the scope before executing the code.

// It happens automatically behind the scenes.
// ------------------------------------------------
// 1. Variable Hoisting (var)
        console.log(a);
        var a = 10;
// Output
    undefined
// Why?JavaScript internally treats it like:
    var a;
    console.log(a);
    a = 10;

// Only the declaration moves to the top,
// NOT the value assignment.


//--------------------------------------------------


// 2. let and const Hoisting

        console.log(b);
        let b = 20;
// Output
        ReferenceError  

// Even let and const are hoisted,
// but they stay in something called: Temporal Dead Zone (TDZ)
// Meaning: You cannot use them before declaration.


// --------------------------------------------------------------------

// 3. Function Hoisting
// Functions are fully hoisted.

        hello();
        function hello() {
            console.log("Hello");
        }
// Output
        Hello

// Because JavaScript internally does:

        function hello() {
            console.log("Hello");
        }

        hello();


//---------------------------------------------------------

// 4. Function Expression Hoisting
// hi();

var hi = function () {
    console.log("Hi");
}
// Output
TypeError




// Why?Internally:

            // var hi;
            // hi(); // undefined()
            // hi = function () {
            //     console.log("Hi");
            // }

// hi becomes undefined, not a function initially.


 let sample1 = function(){
    console.log("Am i accessible");
}

sample1()
//am i accessible

// internally 
//  let sample1();

sample1();

let sample1 = function(){
    console.log("Hi");
}

// ReferenceError


// Hoisting is JavaScript's behavior of moving declarations to the top before execution.

// Real Visualization
        console.log(x);
        var x = 5;
// JavaScript sees:
        var x;
        console.log(x);
        x = 5;

// Important Point
        // Hoisting moves only:
            // Variable declaration
            // Function declaration

        // NOT:
            // Variable values
            // Function expressions




// Easy Memory Trick
// | Keyword    | Hoisted? | Can use before declaration? |
// | ---------- | -------- | --------------------------- |
// | `var`      | Yes      | Yes (`undefined`)           |
// | `let`      | Yes      | No                          |
// | `const`    | Yes      | No                          |
// | `function` | Yes      | Yes                         |

