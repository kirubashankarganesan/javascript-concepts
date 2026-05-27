
// A closure means a function can remember and access variables
//  from its outer function even after the outer function has finished executing.

function outer() {
    let a = 10;

    function inner() {
        console.log(a);
    }

    return inner;
}

let result = outer();

result();

//10


// Easy Real-Life Example

// Think like:
        // Outer function = Parent
        // Inner function = Child

// Even if parent leaves,
        // child still remembers parent's things.

function counter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    }
}

let increment = counter();

increment();
increment();
increment();

// 1 2 3

// Why?
// count variable is remembered by inner function.
// So value does not reset.