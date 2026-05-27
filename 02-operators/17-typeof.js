// typeof vs delete vs new

// typeof → type check

// delete → remove property

// new → create object from constructor

function Car(name) {
  this.name = name;
}
let car1 = new Car("BMW"); 
console.log(car1.name); // "BMW"



// | Operator | Purpose         | Returns         |
// | -------- | --------------- | --------------- |
// | `typeof` | Check datatype  | datatype string |
// | `delete` | Remove property | true/false      |
// | `new`    | Create object   | new object      |
