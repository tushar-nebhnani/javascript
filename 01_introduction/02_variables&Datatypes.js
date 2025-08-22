console.log("Jai Shree Ram!");
/*
    VARIABLES:

    A variable is a “named storage” for data. And we can change the values which are stored in the variables and reassign them to a different value.

    FOR KNOWLEDGE ONLY:
    Pure-Functional Languages: They don't allow variable reassignment, if need to store something else, we need to create a new variable again, we can't just change the value and reassign it to the variable.

    LIMITATIONS IN NAMING VARIABLES:
    1. The name must contain only letters, digits, or the symbols $ and _.
    2. The first character must not be a digit.
*/

/*

    Datatypes:

    JS is a dynamically typed language, which means variables are not bound to the data type of the value.
    
    PRIMITIVE DATA TYPES: IMMUTABLE IN NATURE

    - Number: consists of both integers and float values.
    Special numeric values: Infinity, -Infinity and NaN(Not a Number).

    - BigInt: when the size of the number is too big. Bignt value is created by appending n to the end of declaration.

    - String: In JavaScript, there are 3 types of quotes.
        * Double quotes: "Hello".
        * Single quotes: 'Hello'.
        * Backticks: `Hello`.

    
    - Boolean: true or false values
    
    - Null: It doesn't belong to any specific datatype. null is not a “reference to a non-existing object” or a “null pointer” like in some other languages. It’s just a special value which represents “nothing”, “empty” or “value unknown”. It is a type of object.

    - Undefined: value is not assigned to the variable.

    - Object: Complex entities

    - Symbol: The symbol type is used to create unique identifiers for objects.

    let, const, var(Scopping: Global Scope)

    There are 8 basic data types in JavaScript.

    Seven primitive data types:

    number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).

    bigint for integer numbers of arbitrary length.

    string for strings. A string may have zero or more characters, there’s no separate single-character type.

    boolean for true/false.

    null for unknown values – a standalone type that has a single value null.

    undefined for unassigned values – a standalone type that has a single value undefined.

    symbol for unique identifiers
    
    And one non-primitive data type:
    
    object for more complex data structures.
    The typeof operator allows us to see which type is stored in a variable.

    Usually used as typeof x, but typeof(x) is also possible
*/
console.log("Number: ");
let score = 102
console.log(typeof score); // number
console.log(typeof (score + 0.5)); // number

console.log("String: ");
let name = "Tushar Nebhnani"
console.log(typeof name); // string
console.log(`Hello, my name is ${name}.`); // Hello, my name is Tushar Nebhnani.

console.log("Boolean: ");
let isLogged = false
console.log(typeof isLogged); // boolean

console.log("null: ");
let age = null
console.log(typeof age); // object

console.log("Undefined: ");
let num;
console.log(typeof num); // undefined

console.log("Objects: "); // Objects: 
let user = {firstname: "Tushar", lastName: "Nebhnani"}
console.log(typeof user); // object
