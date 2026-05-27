// String operator

let str1 = "Hello";
let str2 = "World";

console.log(str1 + " " + str2); // "Hello World"
console.log("Hi" + 5); // "Hi5" (string + number = string)
console.log("Value: " + true); // Value: true
console.log("Hello " + null);  // Hello null
console.log("Age: " + undefined);  // Age: undefined

let text = "Hello";
text += " World"; // text = text + " World"
console.log(text); // Hello World


let name = "world";
console.log(`Hello ${name}`);
// Hello world

// template string or template  literal ( ` `) tactic

let str=`javascript`;
console.log(str);

// to add a string to tactic string 
// string interpolation 

let str1=`${str} is scripting language`;
console.log(str1);

let one=1;
let two=2;
console.log(one*two);
console.log(`${one*two}`);
;


