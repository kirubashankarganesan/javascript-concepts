// DATE METHODS
// Definition : Date object is used to work with date and time


// ----------------------------------------------------
// new Date()
// Definition : Creates current date and time object

let date = new Date();

console.log(date);


/*
OUTPUT : (Example)

2026-05-22T10:30:45.000Z

Explanation :
Current system date and time
Output changes based on current time
*/


// ----------------------------------------------------
// getFullYear()
// Definition : Returns current year

console.log(date.getFullYear());


/*
OUTPUT :

2026
*/


// ----------------------------------------------------
// getMonth()
// Definition : Returns month index (0-11)

console.log(date.getMonth() + 1);


/*
OUTPUT : (Example)

5

Explanation :
January = 0
February = 1
...
May = 4

+1 used for normal month format
*/


// ----------------------------------------------------
// getDate()
// Definition : Returns current day of month

console.log(date.getDate());


/*
OUTPUT : (Example)

22
*/


// ----------------------------------------------------
// getHours()
// Definition : Returns current hour

console.log(date.getHours());


/*
OUTPUT : (Example)

16

Explanation :
24-hour format
*/


// ----------------------------------------------------
// getMinutes()
// Definition : Returns current minutes

console.log(date.getMinutes());


/*
OUTPUT : (Example)

30
*/


// ----------------------------------------------------
// getSeconds()
// Definition : Returns current seconds

console.log(date.getSeconds());


/*
OUTPUT : (Example)

45
*/


// ----------------------------------------------------
// setFullYear()
// Definition : Changes year value

// date.setFullYear(2020);

// console.log(date);


/*
Explanation :
Year changes to 2020
*/


// ----------------------------------------------------
// setMonth(month, day)
// Definition : Changes month and day

date.setMonth(12, 15);

console.log(date);


/*
OUTPUT : (Example)

2027-01-15T10:30:45.000Z

Explanation :

Month starts from 0

0  => January
11 => December

12 means next year January

Day becomes 15
*/


// ----------------------------------------------------
// toLocaleDateString()
// Definition : Returns formatted local date

console.log(date.toLocaleDateString());


/*
OUTPUT : (Example)

15/1/2027
*/


// ----------------------------------------------------
// toDateString()
// Definition : Returns readable date string

console.log(date.toDateString());


/*
OUTPUT : (Example)

Fri Jan 15 2027
*/


// ----------------------------------------------------
// toLocaleString()
// Definition : Returns local date and time

console.log(date.toLocaleString());


/*
OUTPUT : (Example)

15/1/2027, 4:30:45 pm
*/


// ----------------------------------------------------
// toLocaleTimeString()
// Definition : Returns local time string

console.log(date.toLocaleTimeString());


/*
OUTPUT : (Example)

4:30:45 pm
*/


// ----------------------------------------------------
// OTHER DATE METHODS

/*
setDate(day)
----------------
Changes day


setHours(hour, minute, second, millisecond)
-------------------------------------------
Changes hour and optional values


setMinutes(minute, second, millisecond)
---------------------------------------
Changes minutes


setSeconds(second, millisecond)
-------------------------------
Changes seconds
*/