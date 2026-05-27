// SHALLOW COPY
// Definition : Copies first level only
//Shallow copy creates a new object, 
// but nested objects or arrays still share the same reference with the original object.
let person1 = {

    name: "Kesavan",

    address: {

        city: "Coimbatore"

    }

};


// Shallow Copy

let shallowCopy = Object.assign({}, person1);


// Modifications

shallowCopy.name = "Murugesan";

shallowCopy.address.city = "Chennai";


console.log("Original Object :", person1);

console.log("Shallow Copy :", shallowCopy);


/*
OUTPUT :

Original Object :

{
  name: 'Kesavan',
  address: { city: 'Chennai' }
}

Shallow Copy :

{
  name: 'Murugesan',
  address: { city: 'Chennai' }
}


Explanation :

Top-level values copied separately

Nested object still shares same reference

So city changes in both objects
*/