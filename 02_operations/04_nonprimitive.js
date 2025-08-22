const username = {
    "first name": "Tushar",
    lastname: "Nebhnani",
    isloggedIn: false
} // this whole is considered as one memory space

// we can change the value in a const object, we are just fixing the memory space inside our compiler.

// username.firstname = "Hitesh"
console.log(username["first name"]); // when we have space in our object name


console.log(username);
console.log(username.lastname);
console.log(typeof username);

let today = new Date()
console.log(today.getHours());

// Array: Collection of things

let heros = ["Spider Man", "Batman", "", "Mahadev: The King", 123]
let anotheruser = ["tushar", "nebhnani", true]

console.log(heros[2])

// implicit type conversion
console.log(1 + '1');
console.log('1' + 1);
// if one is string than others might be string too
// implicit conversion is not the thing to go with
