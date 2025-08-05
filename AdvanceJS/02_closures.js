// function which remenber the enviroment in which they are created. 
function outer() { // normal function
    let counter = 0
    return function() { // closure function
        counter++
        return counter
    }
}

let increment = outer()
console.log(increment()); // here the fucntion will remenber what value it returned(remnebering the enviroment in which it is run).
console.log(increment());
console.log(increment());
console.log(increment());
