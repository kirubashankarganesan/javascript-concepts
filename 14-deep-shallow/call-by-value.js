// CALL BY VALUE
// Definition : Primitive values are copied independently

// Stack Memory stores primitive values

/*  Call By Value

    Stack (Before Modification):

    | Address | Variable | Value |
    |---------|----------|-------|
    | 0x100   |    x     |   10  |
    | 0x104   |    y     |x = 10 |

    Stack (After Modification):

    | Address | Variable | Value |
    |---------|----------|-------|
    | 0x100   |    x     |   10  |
    | 0x104   |    y     |   20  |
    
*/

let x = 10;

let y = x;

console.log("Before Modification");

console.log("x :", x);

console.log("y :", y);


// Modify y

y = 20;

console.log("\nAfter Modification");

console.log("x :", x);

console.log("y :", y);


/*
OUTPUT :

Before Modification

x : 10
y : 10

After Modification

x : 10
y : 20


Explanation :

y gets separate copy of x value

Changing y does not affect x
*/