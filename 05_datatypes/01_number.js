console.log("Jai Shree Ram!"); 

/* 
    Numbers: 64-bit double precision integer and floating point values.
    -> How number is stored in memory: 1 bit for sign, 11 bits for exponent, 52 bits for the value (the significand or mantissa).

    BigInt: Arbitrary precision integers. 253-1) or be less than -(253-1).

    Methods of Number:
    1. .toString(base) - returns a string representation of the number in the numeral system with the given base (2 to 36).

    2. .toExponential(n) - returns a string representing the number in exponential notation with one digit before the decimal point and n digits after it.

    3. .toFixed(n) - rounds the number to n decimal places and returns it as a string.

    4. .toPrecision(n) - formats the number to n significant digits and returns it as a string.

    5. isNaN(value) - converts the value to a number and returns true if it is NaN, otherwise false.

    6. isFinite(value) - converts the value to a number and returns true if it is a finite number, otherwise false.

    7. Number.isNaN(value) - returns true if the value is of type number and is NaN, otherwise false.

    8. Number.isFinite(value) - returns true if the value is of type number and is a finite number, otherwise false.

    9. Object.is(value1, value2) - compares two values for equality,with handling two different edge cases treating NaN as equal to itself and distinguishing between +0 and -0.
*/

// ways to declare a number
let num1 = 1000000; // without underscores
let billion = 1_000_000_000; // using underscores for better readability: Syntactically correct

// short way to write large numbers: e(exponent of 10, we can use + or -)
let num2 = 1e5; // 1 * 10^5 = 100000
let num3 = 1.5e4; // 1.5 * 10^4 = 15000
console.log(num2, num3);

// round off:
console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.6)); // 4
console.log(Math.ceil(4.4)); // 5
console.log(Math.trunc(4.6)); // 4, Internet Explorer does not support it

// how decimals are actually stored in memory
console.log(0.1 + 0.2 == 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004
// A number is stored in memory in its binary form, a sequence of bits – ones and zeroes. But fractions like 0.1, 0.2 that look simple in the decimal numeric system are actually unending fractions in their binary form. There’s just no way to store exactly 0.1 or exactly 0.2 using the binary system.

// isNaN(value) converts its argument to a number and then tests it for being NaN 
console.log(isNaN(10)); // false
console.log(isNaN("10")); // false -> convert the argument to a number

// The value NaN is unique in that it does not equal anything, including itself:

console.log(NaN === NaN); // false

// isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity 
console.log(isFinite(10)); // true
console.log(isFinite(Infinity)); // false

// Use for strict comparisons to NaN and Infinity
// Number.isNaN(value) and Number.isFinite(value) are more robust alternatives that do not convert the argument datatype to a number, so only values of the type number give true.
console.log(Number.isNaN("10")); // false

// There is a special built-in method Object.is that compares values like ===, but is more reliable for two edge cases:

// It works with NaN: Object.is(NaN, NaN) === true, that’s a good thing.
// Values 0 and -0 are different: Object.is(0, -0) === false, technically that’s correct because internally the number has a sign bit that may be different even if all other bits are zeroes. 
// In all other cases, Object.is(a, b) is the same as a === b. So, it’s rarely used.

// parseInt and parseFloat
// The global functions parseInt and parseFloat convert strings to numbers. They read a number from the beginning of the string until they reach a character that cannot be part of the number.
console.log(parseInt("100px")); // 100  

// The parseInt() function has an optional second parameter. It specifies the base of the numeral system, so parseInt can also parse strings of hex numbers, binary numbers and so on:
console.log(parseInt("0xff", 16)); // 255

// few maths functions
console.log(Math.random()); // random number between 0 and 1    
console.log(Math.max(1, 3, 2)); // 3
console.log(Math.min(1, 3, 2)); // 1
console.log(Math.pow(2, 10)); // 1024
console.log(Math.sqrt(16)); // 4
console.log(Math.abs(-5)); // 5
console.log(Math.sin(0)); // 0
console.log(Math.cos(0)); // 1  
console.log(Math.log(1)); // 0
console.log(Math.log10(100)); // 2

//  **** Make sure to remember there’s a loss of precision when working with fractions. ****