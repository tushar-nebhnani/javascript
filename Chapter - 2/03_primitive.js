/*
    Primitve: String, boolean, Number, null, Undefined, symbol

    Non-Primitive: Objects -> array, functions, objects
*/

let balance = 120 // number
let balance1 = new Number(111) // object

console.log(typeof balance);
console.log(typeof balance1);

// boolean
let isActive = true
let is = new Boolean(false) // not recommendated

// null N undefined
let firstname;
console.log(firstname); // undefined: when there is variable but no value has been assigned to it

// string
let myString = "Hello"
let name = "Tushar"
let greet = myString + " " + "Tushar"
console.log(greet);

let mystr = `Jai Shree Ram`
let greetMessaage = `Hello ${name}` // string interpolation
console.log(greetMessaage);

// symbol: internally generate a unique name to it or u can define its name of the symbol UNIQUENESSS
// create a new symbol every single time
let sm1 = Symbol()
let sm2 = Symbol("Tushar")

console.log(sm1 === sm2);
console.log(sm1);
console.log(sm2);
