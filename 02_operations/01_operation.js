console.log("Jai Shree Ram!");
/* 
    Unary Operations: Operations involving only a single number.
    Binary Operations: Operations involving only two number.

    The following math operations are supported:

    Addition +,
    Subtraction -,
    Multiplication *,
    Division /,
    Remainder %,
    Exponentiation **.

    In String, the addition '+' operator helps to concatenate strings.
    Note that if any of the operands is a string, then the other one is converted to a string too.

    console.log(2 + 2 + '1' ); 
    Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.

    For subtraction and division, the operands are converted into numbers. The subtraction and division operator always attempts to convert its operands to numbers. If a string contains a valid numerical representation, it will be coerced into a number.

    The addition operator (+) behaves differently when one of the operands is a string. When you use + with a string and a number, the number is converted to a string, and the operation becomes string concatenation. 

    While the multiplication operator will result the answer in NaN.
*/

let score = 102
let bonus = 45

let total = score + bonus
let sub = score - bonus
let mul = score * bonus
let div = score / bonus
let remindr = score % bonus
let expo = 2 ** 3

let myScore = 110
myScore++
console.log(myScore);

let greet = "Hello" + "World!"
console.log(greet);  

let value = 1 + 12 + "hello"
console.log(value);

console.log(2 * "tushar"); // NaN

// chaining assignments
let a, b, c;
a = b = c = 10;

// Comparison operation

let num1 = 3
let num2 = 3
let num3 = 5

console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 != num3);