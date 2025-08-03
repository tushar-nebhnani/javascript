/*
    OOP -> Encapsulation{data hiding}, Inheritance{give & take}, Polymorphism, Abstraction
*/
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,

    start: function() {
        return `${this.make}, car ${this.model} got started in ${this.year}.` 
    }
}
// console.log(car.start());

// when the function name starts with a capital letter it means that the function is a type of constructor function.
function Person(name, age) {
    this.name = name
    this.age = age
}

let john = new Person("John Doe", 20)
// console.log(john);

function Animal(type) {
    this.type = type
}

// prototipal chaning
Animal.prototype.speak = function() {
    return `${this.type} makes a sound.`   
}

Array.prototype.tushar = function () {
    return `${this}: Custom method`
}

let arr = [1,2,3]
// console.log(arr.tushar());

let myArr = [1,2,3,4]
// console.log(myArr.tushar());

class Vehicle {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }

    start() {
        return `${this.make}, car ${this.model} got started in ${this.year}.`
    }
}

// Inheritance
class Car extends Vehicle {
    drive() {
        return `${this.make} is running on the street.`
    }
}

let myCar = new Car("Audi", "A6", 2002)
// console.log(myCar.drive());
// console.log(myCar.start());

// part - 2

// Encapsulation : restricting direct access to object data
class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount
        return this.#balance 
    }

    getBalance() {
        return `$${this.#balance}`
    }
}

let acc = new BankAccount()
// console.log(acc.getBalance());
acc.deposit(2000)
console.log(acc.getBalance());

// Abstraction: hides complex implementation details
class CoffeeMachine {
    start() {
        //call DB
        // filter value
        return `Starting the machine...`
    }

    brewCoffee() {
        return `Brewing Coffee..`
    }

    pressStart() {
        let m1 = this.start()
        let m2 = this.brewCoffee()
        return `${m1} + ${m2}`
    }
}

let machine = new CoffeeMachine()
// console.log(machine.start());
// console.log(machine.brewCoffee());
// console.log(machine.pressStart());

// Polymorphism: many forms, more than one form

class Bird {
    fly() {
        return "flying..."
    }
}

class Penguin extends Bird {
    fly() {
        return "Penguins can't fly"
    }
}

class Sparrow extends Bird {

}

let bird = new Bird()
let penguin = new Penguin()

console.log(bird.fly());
console.log(penguin.fly());




