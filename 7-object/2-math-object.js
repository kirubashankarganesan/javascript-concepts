// MATH METHODS
// Definition : Math object contains mathematical methods and calculations


// ----------------------------------------------------
// Math.abs(x)
// Definition : Returns positive value

console.log(Math.abs(0));

console.log(Math.abs(-10));


/*
OUTPUT :

0
10

Explanation :
Negative value becomes positive
*/


// ----------------------------------------------------
// Math.sign(x)
// Definition : Returns sign of number

console.log(Math.sign(-10));

console.log(Math.sign(0));

console.log(Math.sign(10));


/*
OUTPUT :

-1
0
1

Explanation :

Negative number => -1
Zero => 0
Positive number => 1
*/


// ----------------------------------------------------
// Math.sqrt(x)
// Definition : Returns square root

console.log(Math.sqrt(25));


/*
OUTPUT :

5

Explanation :
5 × 5 = 25
*/


// ----------------------------------------------------
// Math.cbrt(x)
// Definition : Returns cube root

console.log(Math.cbrt(27));


/*
OUTPUT :

3

Explanation :
3 × 3 × 3 = 27
*/


// ----------------------------------------------------
// Math.pow(base, exponent)
// Definition : Returns power value

console.log(Math.pow(6, 3));


/*
OUTPUT :

216

Explanation :
6³ = 6 × 6 × 6
= 216
*/


// ----------------------------------------------------
// Math.min(...values)
// Definition : Returns smallest value

let arr = [1, 2, 3, 4, 5];

console.log(Math.min(...arr, 10, 15, 0, -1));


/*
OUTPUT :

-1

Explanation :
Smallest value is -1
*/


// ----------------------------------------------------
// Math.max(...values)
// Definition : Returns largest value

console.log(Math.max(...arr, 100, 30));


/*
OUTPUT :

100

Explanation :
Largest value is 100
*/


// ----------------------------------------------------
// Math.random()
// Definition : Returns random number between 0 and 1

let randomNum = Math.random() * 100;

console.log(randomNum.toFixed(3));


/*
OUTPUT :

Example :
45.328

Explanation :
Random number changes every time
toFixed(3) => 3 decimal values
*/


// ----------------------------------------------------
// Math.ceil(x)
// Definition : Rounds value upward

console.log(Math.ceil(2.01));


/*
OUTPUT :

3

Explanation :
Always rounds UP
*/


// ----------------------------------------------------
// Math.floor(x)
// Definition : Rounds value downward

console.log(Math.floor(2.99));


/*
OUTPUT :

2

Explanation :
Always rounds DOWN
*/


// ----------------------------------------------------
// Math.round(x)
// Definition : Normal rounding

console.log(Math.round(2.49));

console.log(Math.round(2.51));


/*
OUTPUT :

2
3

Explanation :

Decimal below .5 => lower value
Decimal above .5 => higher value
*/


// ----------------------------------------------------
// Math.trunc(x)
// Definition : Removes decimal part

console.log(Math.trunc(12.999999));


/*
OUTPUT :

12

Explanation :
Only integer part kept
Decimal removed
*/