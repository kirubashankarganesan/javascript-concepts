let employees = [
    { empName: "KEsavan", salary: 150000 },
    { empName: "Murugesan", salary: 100000 },
    { empName: "John", salary: 120000 },
];


// ----------------------------------------------------
// FILTER METHOD
// Returns all matching elements in new array

let filterData = employees.filter((val, index, array) => {

    console.log(index);

    return val.salary > 110000;

});

console.log(filterData);


/*
STEP BY STEP :

Iteration 1
index = 0
salary = 150000

150000 > 110000
true

So object is included


Iteration 2
index = 1
salary = 100000

100000 > 110000
false

So object is removed


Iteration 3
index = 2
salary = 120000

120000 > 110000
true

So object is included
*/


/*
CONSOLE OUTPUT :

0
1
2

[
  { empName: 'KEsavan', salary: 150000 },
  { empName: 'John', salary: 120000 }
]
*/


// ----------------------------------------------------
// FILTER + FILL

let fillData = employees
    .filter(val => val.salary > 110000)
    .fill({ id: 1, name1: "xyz" });

console.log(fillData);


/*
OUTPUT :

[
  { id: 1, name1: 'xyz' },
  { id: 1, name1: 'xyz' }
]

Explanation :
filter() returns 2 objects
fill() replaces both objects
*/


// ----------------------------------------------------
// FILTER ONLY FOR LOOPING

employees.filter(val => console.log(val));

/*
OUTPUT :

{ empName: 'KEsavan', salary: 150000 }
{ empName: 'Murugesan', salary: 100000 }
{ empName: 'John', salary: 120000 }

Explanation :
filter() loops through all elements
*/


// ----------------------------------------------------
// FIND METHOD
// Returns ONLY FIRST matching object

let filterDataByFind = employees.find((val, index, array) => {

    console.log(index);

    return val.salary > 100000;

});

console.log(filterDataByFind);


/*
STEP BY STEP :

Iteration 1
index = 0
salary = 150000

150000 > 100000
true

find() immediately stops here


OUTPUT :

0

{ empName: 'KEsavan', salary: 150000 }
*/


// ----------------------------------------------------
// DIFFERENCE BETWEEN FILTER & FIND

/*
filter()
---------
Returns ALL matching elements
Return type → Array


find()
-------
Returns ONLY FIRST matching element
Return type → Single Object
*/