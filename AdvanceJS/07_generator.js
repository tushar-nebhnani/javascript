function* numberGenerator() { //generator function
    yield 1
    yield 2
    yield 3
}

console.log(numberGenerator());
let gen = numberGenerator() // alot the object
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
