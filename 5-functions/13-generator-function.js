// A generator function can pause and resume its execution.

// Normal functions run completely at once.

// Generator functions can stop in between and continue later.


// Syntax
// function*

function* numbers() {
    yield 1;//yield is keyword to iterator in generator function
    yield 2;
    yield 3;
    return "finished";
}

let gen = numbers();

console.log(gen.next().value); //to return only value 1
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }

// let gen = numbers();

// It creates a generator object.

// gen.next()
// Starts execution.

// continuous calling the function and return values