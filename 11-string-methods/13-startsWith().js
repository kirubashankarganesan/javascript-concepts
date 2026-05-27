// startsWith()
// Definition : Checks string starts with value

let words = "  My Name is Iron-Man  ";

console.log(words.startsWith("M"));

console.log(words.startsWith("N", 3));

console.log(words.startsWith("N", 4));

console.log(words.startsWith("Name", 3));


/*
OUTPUT :

false
false
true
true

Explanation :
String has leading spaces
Index 4 starts from N
*/