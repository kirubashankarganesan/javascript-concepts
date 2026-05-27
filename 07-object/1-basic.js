// // object uses curly brace to store a value in key value pair 

// // const { use } = require("react");

// // object has a property and action



// // let userProfile = {
// //     userName : "ajay",
// //     // age : 30,
// //     // hairColor : "black",
// //     // eyeColor : "brown",
// //     // eat : function(){
// //     //     console.log( "Im gonna eat ice cream" );
// //     //     return "Vanilla Ice Cream"
// //     }
// // }

// // console.log( userProfile.hairColor, userProfile.age );//black 30
// // console.log( userProfile.userName );//ajay
// // console.log(userProfile.eat);//[Function: eat]

// //userProfile.eat();
// // let iceCreamType = userProfile.eat();
// // console.log( iceCreamType );
// // Im gonna eat ice cream
// // Vanilla Ice Cream
// // ---------------------------------------------------------------------


// //Property in string type
// // let vehicle = {
// //     "vehicleType" : "four-wheeler",
// //     "price" : 20000,
// //     fuelType : "petrol",
// //     "seater type" : ["two", "three", "four"]
// // }

// // console.log( vehicle.vehicleType );
// // console.log( vehicle["vehicleType"]  );
// // console.log( vehicle["fuelType"]  );
// // console.log( vehicle["seater type"][0] );



// // -------------------------------------------------------------------------




// //Shorthand Assigned Property
// //Dynamic Property

let uName = "Kesavan"
let age = 30

// let person1 = {
//     uName : uName,
//     age : age 
// }
let dynamicProp = "employeeId"
let person1 = {
    uName,
    age,
    ['dynamicProp'] : "IFS246",
    [dynamicProp] : "UQI!@#$"
}
console.log( person1 );
console.log( person1.uName, person1.age, person1.dynamicProp, person1[dynamicProp] );


