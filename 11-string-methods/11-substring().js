// substring()
// Definition : Extracts characters between indexes

let subStr = "Single Thread";

console.log(subStr.substring(3));

console.log(subStr.substring(3, 8));

console.log(subStr.substring(-3));

console.log(subStr.substring(8, 0));


/*
OUTPUT :

gle Thread
gle T
Single Thread
Single T

Explanation :
Negative becomes 0
substring swaps indexes automatically
*/

