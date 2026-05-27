let fruits = ["Apple", "WaterMelon", "MuskMelon", "Banana"];

console.log("Original Array :", fruits);


// ----------------------------------------------------
// forEach()
// Used for looping
// Does NOT return new array

fruits.forEach(printFruit);

function printFruit(currentElement, index, totalArr) {
    console.log(currentElement, index, totalArr);
}

/*
OUTPUT :

Apple 0 [ 'Apple', 'WaterMelon', 'MuskMelon', 'Banana' ]
WaterMelon 1 [ 'Apple', 'WaterMelon', 'MuskMelon', 'Banana' ]
MuskMelon 2 [ 'Apple', 'WaterMelon', 'MuskMelon', 'Banana' ]
Banana 3 [ 'Apple', 'WaterMelon', 'MuskMelon', 'Banana' ]

Explanation :
currentElement → current value
index → current index
totalArray → original array
*/


// ----------------------------------------------------
// map()
// Used for transforming array
// Returns new array

fruits.map(function(currentEle, index, totalArr) {
    console.log(currentEle, index, totalArr);
});

/*
OUTPUT :

Apple 0 [ 'Apple', 'WaterMelon', 'MuskMelon', 'Banana' ]
WaterMelon 1 [ 'Apple', 'WaterMelon', 'MuskMelon', 'Banana' ]
MuskMelon 2 [ 'Apple', 'WaterMelon', 'MuskMelon', 'Banana' ]
Banana 3 [ 'Apple', 'WaterMelon', 'MuskMelon', 'Banana' ]

Explanation :
map() also loops like forEach()
But map() returns new array
*/


// ----------------------------------------------------
// forEach() return value

let newArr = fruits.forEach((cElement) => {
    console.log(cElement.toUpperCase());
    return cElement;
});

console.log(newArr);

/*
OUTPUT :

APPLE
WATERMELON
MUSKMELON
BANANA

undefined

Explanation :
forEach() always returns undefined
Even if return is written
*/


// ----------------------------------------------------
// map() returning object array

let newArr1 = fruits.map((cElement, index) => {
    return {
        id: index + 1,
        fruit: cElement
    };
});

console.log(newArr1);

/*
OUTPUT :

[
  { id: 1, fruit: 'Apple' },
  { id: 2, fruit: 'WaterMelon' },
  { id: 3, fruit: 'MuskMelon' },
  { id: 4, fruit: 'Banana' }
]

Explanation :
map() creates new transformed array
*/


// ----------------------------------------------------
// Chaining with map()

let chainArr = fruits
    .map(cEle => cEle.toUpperCase())
    .sort()
    .fill("123");

console.log(chainArr);

/*
OUTPUT :

[ '123', '123', '123', '123' ]

Explanation :
map() → uppercase
sort() → sort array
fill() → replace all with 123
*/


// ----------------------------------------------------
// Chaining with forEach()

// fruits.forEach(...).sort()

// ERROR because forEach() returns undefined

/*
Explanation :
forEach() cannot be chained
Because it does not return array
*/


// ----------------------------------------------------
// Condition using map()

let newArr2 = fruits.map((cEle) => {
    return cEle == "Apple";
});

console.log(newArr2);

/*
OUTPUT :

[ true, false, false, false ]

Explanation :
Checks each element with "Apple"
Returns boolean array
*/


// ----------------------------------------------------
// Condition using forEach()

fruits.forEach(val => console.log(val == "Apple"));

/*
OUTPUT :

true
false
false
false

Explanation :
forEach() directly prints values
Does not create array
*/