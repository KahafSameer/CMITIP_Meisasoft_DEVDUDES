// function add(a,b){
//     return a+b;
// }
// const addArrow2 = (a,b) => a+b;
// console.log(addArrow2(1,2));
// const addArrow = (a,b) =>{
//     return a+b;
// }

// console.log(add(1,2));
// console.log(addArrow(1,2));

const greet = name => console.log(`its me kahaf sameer,${name}!`);
greet("kahaf");


const numbers = [1,2,3,4,6];
const squares = numbers.map(n=>n*n);
console.log("squares = ",squares);


const ages = [12,34,56,87,34,23,16];
const adult= ages.filter(ages => ages>=18);
console.log("adults = ",adult);

const sum = ages.reduce((acc, age)=> acc+ age,0);
console.log("sum = ",sum);

