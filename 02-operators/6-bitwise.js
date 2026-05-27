//Bitwise 
let a1 = 5;   // 0101 in binary
let b1 = 3;   // 0011 in binary

console.log(a1 & b1); // 1 (AND → 0001)
console.log(a1 | b1); // 7 (OR  → 0111)
console.log(a1 ^ b1); // 6 (XOR → 0110) same bit -> 0 differ -> 1
console.log(~a1);     // -6 (NOT)
console.log(a1 << 1); // 10 (Left shift → 1010)
console.log(a1 >> 1); // 2  (Right shift → 0010) eg:- -5 >> 1 answer -3
console.log(a1 >>> 1); // 2 (Unsigned right shift)
