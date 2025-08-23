console.log("Jai Shree Ram!");

/*
    - Logical AND (&&): Returns true if both operands are true.
    - Logical OR (||): Returns true if at least one operand is true.
    - Logical NOT (!): Inverts the boolean value of its operand.
    - Logical nullish assignment (??=): Assigns a value to a variable only if the variable is null or undefined.    

    AND has higher precedence than the OR operator.
*/

// logical AND (&&)
console.log(true && true); // true
console.log(true && false); // false

// logical OR (||)
console.log(true || false); // true
console.log(false || false); // false   

// logical NOT (!)
console.log(!true); // false
console.log(!false); // true


// The OR || operator does the following: Search for the first truthy value and return it. If none is found, it returns the last value.

// Evaluates operands from left to right.
// For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were false), returns the last operand.

// In this case, the first truthy value is "Hello", so it returns "Hello" and doesn't evaluate further.
result = null || 0 || "" || "Hello" || 23 || null
console.log(result); // Hello

// The AND && operator does the following: AND returns the first falsy value or the last value if none were found.
// The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.

answer = true && "hello" && false 
console.log(answer); // false


// Nullish Coalescing Operator (??):

// ** Official Defination ** (view examples before reading this.)
// The nullish coalescing operator (??) is a logical operator in JavaScript that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. 

// treats null and undefined similarly as falsy values 
// For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.

// if the value is defined, then the variable will accept the defined value but if the variable is not defined then it will accept the value we will pass after the '??'.
let count1 = 0;
console.log(count1 ?? 1000);

let count2;
console.log(count2 ?? 1000);

let count3;
console.log(count2 ?? "Ram Ram Ram");

