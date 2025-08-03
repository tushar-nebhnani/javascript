/*
    Prototype based language. 
    Prototype extra functionality n properties provided by the system.

    Class/Blueprint -> Objects/Instances -> OOPs
    OOPs shenanigns of the javascript, bcs it is prototype based throughout behind the scene its prototype based only.

    dander proto.
*/
let computer = {
    cpu: 12
}
let mac = {
    screen: "HD",
    __proto__: computer
};

let tomHardware = {__proto__: computer,}

// console.log(computer);
// console.log(`computer `, computer.__proto__);
// console.log(`mac`, mac.__proto__);
// console.log(tomHardware);

let Car = {
    tyres: 4
}
let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, Car)
console.log(`tesla `, tesla);
console.log(`tesla `, tesla.tyres);
console.log(`tesla `, Object.getPrototypeOf(tesla));

