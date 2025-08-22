console.log("Jai Shree Ram!");
/*
  Type Conversion: 
  Explicit conversion of datatype from one type to another.  

  List of Datatypes: (case-sensitive)
  1. String
  2. Number
  3. Boolean

    Numeric conversion rules:

    Value	                    Becomes…
    undefined	                NaN
    null	                     0
    true and false	            1 and 0
    string	Whitespaces         (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.

    null and undefined becomes differently.

    Falsy Values: 0, empty string, null, undefined and NaN
    " ": this is a non-empty string as empty space is also a character
*/

let value = true;
console.log(typeof value); // boolean
value = String(value); // now value is a string "true"
console.log(typeof value); // string

let str = "123";
console.log(typeof str); // string
let num = Number(str); // becomes a number 123
console.log(typeof num); // number

console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
