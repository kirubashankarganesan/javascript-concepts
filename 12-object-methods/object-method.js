// OBJECT METHODS
// Definition : Object methods are used to create, modify and manage objects


// ----------------------------------------------------
// NORMAL OBJECT

let person = {

    pName: "Johny",

    age: 30

};

console.log(person);


/*
OUTPUT :

{ pName: 'Johny', age: 30 }
*/


// ----------------------------------------------------
// ARRAY IS ALSO OBJECT

let arr = [1, 2, 3, 4];

console.log(arr);


/*
OUTPUT :

[ 1, 2, 3, 4 ]
*/


// ----------------------------------------------------
// Object.create()
// Definition : Creates new object using another object as prototype

let newObj = Object.create(person);

newObj.location = "Tamilnadu";//we can create our own property 


console.log(newObj.__proto__);

console.log(Object.getPrototypeOf(newObj));

console.log(newObj.age);

console.log(newObj);


/*
OUTPUT :

{ pName: 'Johny', age: 30 }

{ pName: 'Johny', age: 30 }

30

{ location: 'Tamilnadu' }


Explanation :

newObj inherits properties from person

age is accessed through prototype
*/


// ----------------------------------------------------
// Object.assign()
// Definition : Copies properties from source object to target object

let person1 = {

    id: "QUI123",

    name1: "ajay"

};

let newObj1 = Object.assign(

    person1,
    {
        role: "frontEnd Developer",
        salary: 1000
    }
);
console.log(person1);
console.log(newObj1);


/*
OUTPUT :

{
  id: 'QUI123',
  name1: 'Kesavan',
  role: 'frontEnd Developer',
  salary: 1000
}

{
  id: 'QUI123',
  name1: 'Kesavan',
  role: 'frontEnd Developer',
  salary: 1000
}


Explanation :

Object.assign modifies original object also
*/


// ----------------------------------------------------
// Object.entries()
// Definition : Converts object into array of key-value pairs

let employee = {

    eName: "Murugan",

    eRole: "Back end Developer"

};

let multiArr = Object.entries(employee);

multiArr.push(["Name", "Murugesan"]);

console.log(multiArr);


/*
OUTPUT :

[
  [ 'eName', 'Murugan' ],
  [ 'eRole', 'Back end Developer' ],
  [ 'Name', 'Murugesan' ]
]


Explanation :

Each property becomes array
[key, value]
*/


// ----------------------------------------------------
// Object.fromEntries()
// Definition : Converts key-value array back into object

let normalObj = Object.fromEntries(multiArr);

console.log(normalObj);


/*
OUTPUT :

{
  eName: 'Murugan',
  eRole: 'Back end Developer',
  Name: 'Murugesan'
}
*/


// ----------------------------------------------------
// Object.keys()
// Definition : Returns only object keys

let onlyKeys = Object.keys(normalObj);

console.log(onlyKeys);


/*
OUTPUT :

[ 'eName', 'eRole', 'Name' ]
*/


// ----------------------------------------------------
// Object.values()
// Definition : Returns only object values

let onlyValues = Object.values(normalObj);

console.log(onlyValues);


/*
OUTPUT :

[ 'Murugan', 'Back end Developer', 'Murugesan' ]
*/


// ----------------------------------------------------
// Object.freeze()
// Definition : Prevents adding, deleting or modifying properties

let freezeObj = {

    id: 1

};

Object.freeze(freezeObj);

freezeObj.name1 = "Javascript";

freezeObj.id = "QUI123";

console.log(freezeObj);


/*
OUTPUT :

{ id: 1 }


Explanation :

Cannot add new property
Cannot modify existing property
*/


// ----------------------------------------------------
// Object.isFrozen()
// Definition : Checks object is frozen or not

console.log(Object.isFrozen(normalObj));

console.log(Object.isFrozen(freezeObj));


/*
OUTPUT :

false

true
*/


// ----------------------------------------------------
// HTML CONNECTION

/*
<script src="objectMethods.js"></script>

Explanation :

Connects external JavaScript file to HTML
Browser executes JS code inside objectMethods.js
*/