const prompt = require('prompt-sync')({
    sigint: true
});

let userArray = (prompt("Enter an array: "))
console.log(userArray)

while (userArray.length < 10 === true) {
    console.log("Your array must be at least 10 characters long, try again")
        (prompt("Enter an array: "))
    console.log(userArray)
}
if (userArray.length > 10 === true) {
    console.log("Your array is at least 10 characters long, good job")
}