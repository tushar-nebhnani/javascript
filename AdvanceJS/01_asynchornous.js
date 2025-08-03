// ability to have a pause in a language bcs certain things take time to execute in the compiler.
function hello() {
    return `hello! from chai code.`
}

setTimeout(() => {
    console.log(hello()); 
}, 2000)