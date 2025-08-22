console.log("Jai Shree Ram!");

/*
    THESE ARE BROWSER BASED FEATURES OF JAVASCRIPT WHICH ARE NOT SUPORTED BY NODE. (Run the html file attached to see the execution of them.)
*/

// ALERT -> TO SEND A WARNING
// alert(message); The mini-window with the message is called a modal window
alert("Jai Shree Ram!")

// PROMPT -> TO TAKE AN INPUT
// result = prompt(title, [default]);
// The second parameter is optional, but if we don’t supply it, Internet Explorer will insert the text "undefined" into the prompt.
name = prompt("What is your name?", "")
alert(`My name is ${name}.`)

// CONFIRM -> TO ASK QUESTION
// shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
let isUser = confirm("Are you the user?")
alert(isUser)
