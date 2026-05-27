// endsWith()
// Definition : Checks string ends with value
let words = "  My Name is Iron-Man  ";
console.log(words.endsWith("n", words.length));

console.log(words.endsWith("Iron", 15));


/*
OUTPUT :

false
true

Explanation :
Actual end has spaces
Position 15 ends at Iron
*/

