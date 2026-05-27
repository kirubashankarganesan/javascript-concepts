// SORT METHOD
// Definition : sort() is used to arrange array elements in ascending or descending order

// ----------------------------------------------------

let arr = [10, 5, 100, 30, 6, 2];


// ASCENDING ORDER

let ascendingArr = arr.sort((a, b) => {
    return a - b;
});

console.log("Ascending Sort :", ascendingArr);


/*
OUTPUT :

[ 2, 5, 6, 10, 30, 100 ]


Explanation :

a - b

positive  => swapping
negative  => no swapping


10 - 5 = 5
positive => swap

[5,10,100,30,6,2]


10 - 100 = -90
negative => no swap

[5,10,100,30,6,2]


100 - 30 = 70
positive => swap

[5,10,30,100,6,2]
*/


// ----------------------------------------------------
// DESCENDING ORDER

// Definition : b-a is used for descending order sorting

let newArr = [10, 20, 30, 1, 4, true, "100A"];

let descendingSort = newArr.sort((a, b) => {
    return b - a;
});

console.log("\nDescending Sort :", descendingSort);


/*
OUTPUT :

[30, 20, 10, 4, 1, true, '100A']


Explanation :

b - a

positive => swap
negative => no swap


20 - 10 = 10
swap

30 - 10 = 20
swap


true becomes 1

1 - 1 = 0
no swap


"100A" becomes NaN

NaN comparison cannot sort properly
*/


// ----------------------------------------------------
// SOME METHOD

// Definition : some() checks whether at least one element satisfies condition

let arr1 = [10, 2, 30, 40, 5];

let value = arr1.some((ele, ind, arr) => {

    return ele % 2 == 0;

});

console.log("\nSome Method :", value);


/*
OUTPUT :

true


Explanation :

10 % 2 == 0
true

Immediately stops and returns true

Because at least one even number exists
*/


// ----------------------------------------------------
// EVERY METHOD

// Definition : every() checks whether all elements satisfy condition

let value1 = arr1.every((ele, ind, arr) => {

    return ele % 2 == 0;

});

console.log("Every Method :", value1);


/*
OUTPUT :

false


Explanation :

10 even  => true
2 even   => true
30 even  => true
40 even  => true
5 even   => false

One false found

So every() returns false
*/


// ----------------------------------------------------
// FINAL OUTPUT

/*
Ascending Sort :
[ 2, 5, 6, 10, 30, 100 ]

Descending Sort :
[ 30, 20, 10, 4, 1, true, '100A' ]

Some Method :
true

Every Method :
false
*/