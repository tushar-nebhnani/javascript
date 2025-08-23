console.log("Jai Shree Ram!"); 

/* 
    Numbers: 64-bit double precision integer and floating point values.
    BigInt: Arbitrary precision integers.

    .toFixed(n) - rounds the number to n decimal places and returns it as a string.
    .toPrecision(n) - formats the number to n significant digits and returns it as a
*/

// ways to declare a number
let num1 = 1000000; // without underscores
let num2 = 1000000.50; // floating point number
let billion = 1_000_000_000; // using underscores for better readability: Syntactically correct

// round off:
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.round(-4.6)); // -5
console.log(Math.round(-4.4)); // -4
console.log(Math.floor(4.6)); // 4
console.log(Math.ceil(4.4)); // 5
console.log(Math.trunc(4.6)); // 4

