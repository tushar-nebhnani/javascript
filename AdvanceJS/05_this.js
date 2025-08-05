const person = {
    name: "Tushar",
    age: 17,
    greet() {
        console.log(`Hey! I am ${this.name}, age ${this.age}.`);
        
    }
}

person.greet()

const greetFunction = person.greet
greetFunction()

const boundFunction = person.greet.bind({name: "John", age: 21})
boundFunction()

// bind, call, apply