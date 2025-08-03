// JS Execution Context
// Task 1
function makeTea(typeOfTea) {
    let teaOrder =  `Making ${typeOfTea}.`
    return teaOrder
}

// Task 2
function orderTea(type) {
    function confirmOrder(type) {
        return `Confirmed order for ${type}`
    }
    return confirmOrder(type)
}

// Task 3
let calculateTotal = (price, quantity) => {
    return `Amount to be paid: ${price * quantity}`
}

// Task 4: Nested Functions
function processTeaOrder(teaFunction) {
    return teaFunction("earl Grey")
}

console.log(processTeaOrder(makeTea));
