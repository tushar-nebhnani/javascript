// Static
class Calculator {
    static add(a,b) {
        return `${a+b}`
    }
}

// static methods can only be called by the class itself

let miniCalc = new Calculator()
// console.log(miniCalc.add("tushar", 4));

// console.log(Calculator.add(10,2));

// Getters & Setters: Having more control
class Employee {
    #salary
    constructor(name, salary) {
        if (salary < 0) {
            throw new Error("Salary cannot be negative.");
            
        }
        this.name =  name
        // this.salary = salary difference between the both the lines
        this.#salary = salary // this underscore doesn't have any meaning this jsut exists to create differentiation
    }

    get salary(){
        return "You are not allowed to see salary."
    }

    set salary(value){
        if (value < 0) {
            console.error("Invalid Salary");
        } else {
            this.salary = value
        }
    }
}
// whenever we put '_' means getters n setters are about to come
let emp = new Employee("Alice", -50000)
console.log(emp.salary);
emp.salary = -1000
console.log(emp.salary);
