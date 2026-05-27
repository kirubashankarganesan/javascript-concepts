// CALL BY REFERENCE
// Definition : Objects and arrays share same memory reference

// Stack stores reference
// Heap stores actual object/array

/*  Call By Refrence 

    Stack Memory

    | address | Variable           | value -> Reference/Pointer (Address) |
    |------------------------------|------------------------------------- |
    | 0x100   | obj1               | 0x001                                |
    | 0x104   | arr1               | 0x002                                |
    | 0x108   | obj2               | obj1 = 0x001                         |
    | 0x112   | arr2               | arr1 = 0x002                         |

    Heap Memory

    | Address | Object                |
    |---------|-----------------------|
    | 0x001   | { name: 'Kesavan' }   |
    | 0x002   | [ 1,2,3 ]             |

*/
let obj1 = {

    name: "Kesavan"

};

let arr1 = [1, 2, 3];


// Copy reference

let obj2 = obj1;

let arr2 = arr1;


// Modifications

obj1.name = "Murugesan";

obj2.role = "Developer";

arr1[0] = "One";


console.log("obj1 :", obj1);

console.log("obj2 :", obj2);

console.log("\narr1 :", arr1);

console.log("arr2 :", arr2);


/*
OUTPUT :

obj1 :
{
  name: 'Murugesan',
  role: 'Developer'
}

obj2 :
{
  name: 'Murugesan',
  role: 'Developer'
}

arr1 :
[ 'One', 2, 3 ]

arr2 :
[ 'One', 2, 3 ]


Explanation :

obj1 and obj2 point to same object

arr1 and arr2 point to same array

Changing one affects another
*/