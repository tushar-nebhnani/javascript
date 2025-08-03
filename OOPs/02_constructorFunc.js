function greet(name) {
    console.log("Hello! ", name);
    
}

// constructor function
function Person(name, age) { // RHS are coming from the parameters
    this.name = name
    this.age = age
}

function Car(make, model) {
    this.make = make
    this.model = model
}

// without new keyword can't create a object, this is to get the context of the function/variables 
let myCar = new Car(2004, "Tesla")
console.log(myCar);

let myNewCar = new Car("Toyota", "Tesla")
console.log(myNewCar);

function tea(type) {
    this.type = type
    this.describe = () => {
        return `This is a cup of ${this.type}.`
    }
}

let lemonTea = new tea("Lemon Tea")
console.log(lemonTea);
console.log(lemonTea.describe());

function animal(species) {
    this.species = species
}

animal.prototype.sound = function() {
    return `${this.species} makes a sound.`
}

let dog = new animal("mamal")
console.log(dog);
console.log(dog.sound());

function Drink(name) {
    if(!new.target) {
       throw new Error("Drink must be called with a 'new' keyword.") 
    }
    this.name = name
}

let tea1 = new Drink("tea")
let coffee = Drink("coffee")