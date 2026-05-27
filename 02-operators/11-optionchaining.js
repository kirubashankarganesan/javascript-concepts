// Optional Chaining Operator (?.)

// Avoids errors when accessing properties of null or undefined.

let user = { profile: { name: "Alice" } };
console.log(user?.profile?.name); // "Alice"
console.log(user?.address?.city); // undefined (no error)
// safely access object properties