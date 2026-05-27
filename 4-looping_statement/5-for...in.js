// Used to iterate object keys/properties.

for(let key in object){

}


let user = {
   name: "John",
   age: 25
};

for(let key in user){
   console.log(key);
}

// name
// age

for(let key in user){
   console.log(user[key]);
}

// John
// 25

// | Loop       | Gives        |
// | ---------- | ------------ |
// | `for...of` | values       |
// | `for...in` | keys/indexes |
