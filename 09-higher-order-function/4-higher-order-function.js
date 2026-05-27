// REDUCE METHOD
// Definition : reduce() is used to reduce array into single value


// ----------------------------------------------------
// NORMAL FOR LOOP SUM

let arr = [10, 2, 3, 4, 5];


// 10 + 2 + 3 + 4 + 5 = 24

let totalVal = 0;

for (let i = 0; i < arr.length; i++) {

    totalVal = totalVal + arr[i];

}


/*
STEP BY STEP :

1st :
0 + 10 = 10

2nd :
10 + 2 = 12

3rd :
12 + 3 = 15

4th :
15 + 4 = 19

5th :
19 + 5 = 24
*/


console.log("For Loop Total :", totalVal);


/*
OUTPUT :

For Loop Total : 24
*/


// ----------------------------------------------------
// REDUCE METHOD

let totalVal1 = arr.reduce((acc, cElement, index, array) => {

    return acc + cElement;

}, 0);

console.log("\nReduce Total :", totalVal1);


/*
Explanation :

acc        => accumulator
cElement   => current element


INITIAL VALUE :

acc = 0


ARRAY :

[10,2,3,4,5]


1st iteration :
0 + 10 = 10

acc = 10


2nd iteration :
10 + 2 = 12

acc = 12


3rd iteration :
12 + 3 = 15

acc = 15


4th iteration :
15 + 4 = 19

acc = 19


5th iteration :
19 + 5 = 24

acc = 24
*/


/*
OUTPUT :

Reduce Total : 24
*/


// ----------------------------------------------------
// REDUCE WITH OBJECT ARRAY

let employees = [

    { eName: "Xyz", salary: 1000 },

    { eName: "abc", salary: 10000 },

    { eName: "Kesavan", salary: 20000 },

    { eName: "Alex", salary: 25000 }

];


// Total Salary Calculation

let calcTotalSalary = employees.reduce((acc, cElement) => {

    return acc + cElement.salary;

}, 0);

console.log("\nTotal Salary :", calcTotalSalary);


/*
STEP BY STEP :

Initial acc = 0


1st :
0 + 1000 = 1000

2nd :
1000 + 10000 = 11000

3rd :
11000 + 20000 = 31000

4th :
31000 + 25000 = 56000
*/


/*
OUTPUT :

Total Salary : 56000
*/


// ----------------------------------------------------
// FINAL UNDERSTANDING

/*
reduce()

Takes entire array
Processes one by one
Returns single final value

Used for :

- sum
- multiplication
- total salary
- average
- object grouping
*/