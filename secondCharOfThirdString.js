const prompt = require('prompt-sync')({
    sigint: true
});

let userArray = JSON.parse(prompt("Enter an array: "))

console.log(userArray)

let secondChar = userArray[userArray.length - 1][1]
// console.log(secondChar)

if (typeof secondChar === "string") {
    console.log("The second character in the third item of userArray is: " + secondChar)
}

else if (typeof secondChar !== "string") {
    console.log("Error!")
}




// userArray[userArray.length-1][0])