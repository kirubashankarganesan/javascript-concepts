// Used to iterate values of iterable objects.

// Works with:
        // arrays
        // strings
        // maps
        // sets

// syntax 
for(let variable of iterable){

}

// for..of gives --> values

let arr = [10,20,30];

for(let value of arr){
   console.log(value);
}

// 10
// 20
// 30

let text = "JS";

for(let ch of text){
   console.log(ch);
}

// J
// S