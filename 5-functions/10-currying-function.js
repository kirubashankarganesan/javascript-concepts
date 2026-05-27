//currying function


// Currying means converting a function with multiple parameters into multiple functions with one parameter each.


//uncurrying function
function add(a, b) {
    return a + b;
}

console.log(add(2, 3));

//5
function add(a) {
    return function(b) {
        return a + b;
    }
}

//currying function

function add(a) {
    return function(b) {
        return a + b;
    }
}

console.log(add(2)(3));

//5
// if i call function add(2) only it gives a output as  ---> function[anonymous]

function greet(name) {
    return function(message) {
        console.log(name + " : " + message);
    }
}

let user = greet("ajay");

user("Hello");
user("Good Morning");

// ajay : Hello
// ajay : Good Morning  