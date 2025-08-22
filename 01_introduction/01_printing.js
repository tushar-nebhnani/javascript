/*
    Code File -> Syntax Tree -> JIT(Just in Time) Compiler -> Byte Code -> Machine Code -> Execute
    Tokenization: Collecting keywords from the code n create structure
*/
console.log("Jai Shree Ram!");

// `process.stdout.write` is specific to Node.js and writes directly to the standard output stream.
process.stdout.write("Chai") 
// The main difference from `console.log` is that it does not automatically add a newline character.

// we can see the Live example so problem here.
process.stdout.write("Chai") 
process.stdout.write("Chai") 

// To add a newline, you must do it manually:
process.stdout.write("\n\n")

// --- Different ways to print using the `console` object ---
console.log("This is a general log message.");
console.log("City: Jaipur");

// `console.table` is great for displaying objects or arrays in a tabular format.
console.log("\nDisplaying data in a table:")
console.table({city : "Jaipur", country: "India"})

// `console.warn` outputs a warning message. In browser developer tools,
// this is often highlighted with a yellow background and a warning icon
// to distinguish it from regular logs.
console.warn("This is a warning message.")
