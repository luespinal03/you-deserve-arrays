const prompt = require('prompt-sync')({
    sigint: true
});

let userArray = JSON.parse(prompt("Enter an array: "))
// console.log(userArray)


if (typeof userArray[0] === "number" ) {
    console.log("The first item in you array" + userArray[0] + " is a number")
}

if (typeof userArray[0] !== "number") {
    console.log("The first item in you array" + userArray[0] + " is not a number")
}