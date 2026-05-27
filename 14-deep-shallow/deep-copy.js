// DEEP COPY
// Definition : Completely copies object including nested objects
// Deep copy creates a completely independent copy of the object including all 
// nested objects and arrays

// In shallow copy, only top-level properties are copied and nested objects share the same reference.
// In deep copy, the entire object including nested objects is copied independently
let student1 = {

    sName: "Kesavan",

    marks: {

        maths: 90

    }

};


// Deep Copy

let deepCopy = JSON.parse(JSON.stringify(student1));


// Modifications

deepCopy.sName = "Murugesan";

deepCopy.marks.maths = 100;


console.log("Original Student :", student1);

console.log("Deep Copy :", deepCopy);


/*
OUTPUT :

Original Student :

{
  sName: 'Kesavan',
  marks: { maths: 90 }
}

Deep Copy :

{
  sName: 'Murugesan',
  marks: { maths: 100 }
}


Explanation :

Completely separate copy created

Changing deepCopy does not affect original object
*/