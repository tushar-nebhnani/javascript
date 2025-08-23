console.log("Jai Shree Ram!");
/*
    - Conditions and If Else Statements:

    if (condition) {
        // code to be executed if the condition is true 
    } else {
        // code to be executed if the condition is false
    }

    - If-Else-if Statement
    if (condition1) {
        // code to be executed if condition1 is true                
    } else if (condition2) {
        // code to be executed if condition2 is true    
    } else {
        // code to be executed if both condition1 and condition2 are false
    }  

    - Ternary Operator:
    Syntax: condition ? expression1 : expression2
    If the condition is true, expression1 is executed. Otherwise, expression2 is executed.
*/

// comparison operators: >, <, >=, <=, ==, !=, ===, !==
n1 = 9
n2 = 3

if (n1 > n2) {
    console.log(`${n1} is greater than ${n2}`);   
}

let str1 = "chai"
let str2 = "chaicode"

if (str1 === str2) {
    console.log(`${str1} is equal to ${str2}.`); 
} else {
    console.log(`${str1} is not equal to ${str2}.`); 

}

// A number 0, an empty string "", null, undefined, and NaN all become false.
if(0) {
    console.log("0 is not a falsy value.");
} else {
    console.log("0 is a falsy value");
}

// comparison of datatypes
let variable = 4

if (typeof(variable) === "number") {
    console.log(`The ${variable} is a number.`);
} else {
    console.log(`The ${variable} is not a number.`);
}

let consent = "tushar"

if (typeof(consent) == "boolean"){
    console.log(`The ${consent} is a boolean value.`);
} else {
    console.log(`The ${consent} is not a boolean value.`);
}

let age = 21

let accessAllowed = age > 18 ? console.log("Allowed.") : console.log("Not Allowed");
