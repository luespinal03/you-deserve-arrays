const prompt = require('prompt-sync')({
    sigint: true
});

let userArray = JSON.parse(prompt("Enter an array: "))
console.log(userArray)

if (userArray.length < 10) {
    console.log("Your array must be at least 10 characters long, try again")
    
}
else if (userArray.length >= 10 ) {
    console.log("Your array is at least 10 characters long, good job")
}