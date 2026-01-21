const prompt  = require('prompt-sync')();

console.log("****Welcome to Meissasoft Cafe****");
console.log("--Enter Your Bill--");
let bill = parseInt(prompt("Bill Amount : "));
let tip = parseInt(prompt("Enter the % of Tip You Want to add in your Bill Sir: "))

//let tip = 10;
//bill = 2000;
indecimal = tip / 100;
totaltip = indecimal* bill;
totalbill = totaltip + bill; 
console.log("Bill = ", bill);
console.log("Tip = ", tip);
console.log("total Amount of Tip = ", totaltip);
console.log("Total bill = ", totalbill);