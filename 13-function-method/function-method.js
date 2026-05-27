// THIS, CALL, APPLY, BIND
// Definition : call(), apply() and bind() are used to change the value of this


// ----------------------------------------------------
// NORMAL OBJECT METHOD

let employee = {

    eName: "ajay",

    eSalary: 1000,

    introYourself: function(a, b) {

        console.log(a + b + this.eName);

    }

};

console.log(employee.eName);

employee.introYourself(10, 20);


/*
OUTPUT :

ajay

30ajay

Explanation :

a + b = 30

this.eName = ajay
*/


// ----------------------------------------------------
// ARROW FUNCTION AND THIS

var eName = "ram";

let employee1 = {

    eName: "ajay",

    eSalary: 1000,

    introYourself: (a, b) => {

        console.log(this.eName);

    }

};

employee1.introYourself(10, 20);


/*
OUTPUT : (Browser)

undefined

OR

ram


Explanation :

Arrow function does not create its own this

It takes this from outer scope(global object)
*/


// ----------------------------------------------------
// OBJECTS FOR CALL APPLY BIND

let person = {

    pFName: "Kesavan",

    pLName: "Murugesan"

};


let person1 = {

    pId: "UQI123",

    pFName: "Nanda",

    pLName: "Kumar",

    introYourself: function(a, b) {

        console.log(
            this.pFName + " " +
            this.pLName + " " +
            (a + b)
        );

        return (a + b);

    }

};


// ----------------------------------------------------
// call()
// Definition : call() invokes function immediately with arguments separately

person1.introYourself.call(person, 10, 20);


/*
OUTPUT :

Kesavan Murugesan 30


Explanation :

this becomes person object

a = 10
b = 20
*/


// ----------------------------------------------------
// apply()
// Definition : apply() invokes function immediately with arguments in array

person1.introYourself.apply(person, [100, 200]);


/*
OUTPUT :

Kesavan Murugesan 300


Explanation :

Arguments passed as array
*/


// ----------------------------------------------------
// bind()
// Definition : bind() returns new function with changed this

let newFun = person1.introYourself.bind(person, 500, 300);

console.log(newFun());


/*
OUTPUT :

Kesavan Murugesan 800

800


Explanation :

bind() does not execute immediately

It returns new function

newFun() executes later
*/


// ----------------------------------------------------
// DIFFERENCE BETWEEN CALL APPLY BIND

/*
call()
---------
Arguments separated
Executes immediately


apply()
---------
Arguments inside array
Executes immediately


bind()
---------
Returns new function
Executes later
*/


// ----------------------------------------------------
// HTML CONNECTION

/*
<script src="call_apply_bind.js"></script>

Explanation :

Connects external JavaScript file with HTML
*/