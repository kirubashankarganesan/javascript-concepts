// split()
// Definition : Converts string into array

let words1 = "My Name is Iron-Man-in-marvel";

console.log(words1.split(" "));

console.log(words1.split(" ", 3));

console.log(words1.split("-"));

console.log(words1.split("-", 2));


/*
OUTPUT :

[ 'My', 'Name', 'is', 'Iron-Man-in-marvel' ]
[ 'My', 'Name', 'is' ]
[ 'My Name is Iron', 'Man', 'in', 'marvel' ]
[ 'My Name is Iron', 'Man' ]
*/

