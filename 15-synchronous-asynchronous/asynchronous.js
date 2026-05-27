// EVENT LOOP
// Definition : Event loop manages execution of synchronous and asynchronous tasks in JavaScript


// ----------------------------------------------------
// NORMAL SYNCHRONOUS FUNCTIONS

function f1() {

    console.log("First");

}

function f2() {

    console.log("Second");

}

function f3() {

    console.log("Third");

}


// Function Calls

f1();

f2();

f3();


/*
OUTPUT :

First
Second
Third


Explanation :

JavaScript executes line by line

This is synchronous execution
*/


// ----------------------------------------------------
// setTimeout()
// Definition : Executes function after specified delay

function f4() {

    console.log("Timeout Function");

}

console.log("\nStart");

setTimeout(f4, 2000);

console.log("End");


/*
OUTPUT :

Start
End

(After 2 seconds)

Timeout Function


Explanation :

setTimeout is asynchronous

It goes to Web APIs

After timer completes,
callback goes to Macro Task Queue

Event Loop pushes it into Call Stack
*/


// ----------------------------------------------------
// EVENT LOOP FLOW

/*
1. Call Stack executes synchronous code

2. setTimeout goes to Web API

3. Timer completes

4. Callback moves to Macro Task Queue

5. Event Loop checks Call Stack

6. If stack empty,
   callback pushed into Call Stack

7. Function executes
*/


// ----------------------------------------------------
// MICROTASK QUEUE
// Definition : Higher priority queue mainly used by Promises

console.log("\nProgram Start");


setTimeout(() => {

    console.log("setTimeout");

}, 0);


Promise.resolve().then(() => {

    console.log("Promise");

});


console.log("Program End");


/*
OUTPUT :

Program Start
Program End
Promise
setTimeout


Explanation :

Promise goes to Microtask Queue

setTimeout goes to Macrotask Queue

Microtask Queue has higher priority

So Promise executes first
*/


// ----------------------------------------------------
// EVENT LOOP PRIORITY

/*
First Priority
----------------
Micro Task Queue

Examples :
- Promise
- queueMicrotask


Second Priority
----------------
Macro Task Queue

Examples :
- setTimeout
- setInterval
- DOM Events
*/


// ----------------------------------------------------
// IMPORTANT UNDERSTANDING

/*
JavaScript is Single Threaded

Only one task executes at a time

Event Loop helps handle asynchronous operations
without blocking execution
*/