// nullish Coalescing Operator (??)

let name = null;
console.log(name ?? "Guest"); // "Guest"

// If value is null or undefined,
// use defaultValue
// otherwise use original value

// It does NOT check:
    // 0
    // false
    // ""
    // NaN

let num = 0;
console.log(num ?? 100);// 0