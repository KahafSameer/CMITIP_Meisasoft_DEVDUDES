const prompt = require('prompt-sync')();

console.log("Enter Your Choice \nWhat you want to Calculate:");
console.log("1. Calsius -> Fahrenheit")
console.log("2. Fahrenheit -> Calsius")
let choice = parseInt(prompt("Select your choice (1 or 2)"));

if(choice ==1){

let celsius = parseFloat(prompt("Enter Temprature in Calcius : "))
Fahrenheit = (celsius * 1.8)+32;
console.log("Fahrenheit: ", Fahrenheit);
}

else if(choice ==2){
let F = parseFloat(prompt("Enter Temprature in Fahrenheit : "))
C = (F - 32 ) * 5/9;
console.log("Calcius: ", C.toFixed(2));
}
else{
    console.log("Invalid Choice");
}
