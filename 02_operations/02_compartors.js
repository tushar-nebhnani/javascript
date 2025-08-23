console.log("Jai Shree Ram!");

// Comparators Arthmatic
console.log(4 > 5);
console.log(4 < 5);
console.log(4 >= 5);
console.log(4 <= 5);
console.log(4 == 5);
console.log(4 != 5 );

/*
    ** String Comparison **

    JS uses the lexicographical order to compare strings, in compares the strings letter by letter.
    The comparison is based on the Unicode code point value of each character in the strings.
    If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

    Example: "A" > "B" is false because "A" comes before "B" in the alphabet.

    Example: "Glow" > "Glee" is true because "l" comes after "e" in the alphabet.

    Example: "Bee" > "Be" is true because the first string is longer than the second one.
    
    Example: "2" > "12" is true because in the lexicographic order "2" is greater than "1".
*/

console.log("Glow" > "Glee");
console.log("Bee" > "Be");
console.log("2" > "12");

// Comparing different types
console.log('2' > 1); // true, string '2' is converted to number 2
console.log('01' == 1); // true, string '01' is converted to number 1

console.log(true == 1); // true, true is converted to 1
console.log(false == 0); // true, false is converted to 0

// strict equality: checks both value and type without type conversion
console.log(1 === 1); // true, same type and value
console.log(0 === false); // false, different types

console.log(null == undefined); // true, both represent absence of value
console.log(null === undefined); // false, different types

// comparison of null with 0
console.log(null > 0); // false
console.log(null == 0); // false    
console.log(null >= 0); // true

// comparison of undefined with 0 -> undefined cannot be compared to different values, it will always return in false values.
console.log(undefined > 0); // false(1)
console.log(undefined < 0); // false(2)
// Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons. 
// **** NaN is a special numeric value which returns false for all comparisons. ****

console.log(undefined == 0); // false(3)
// The equality check (3) returns false because undefined only equals null, undefined, and no other value.
 
console.log(undefined == null); // true, both represent absence of value
console.log(undefined === null); // false, different types



