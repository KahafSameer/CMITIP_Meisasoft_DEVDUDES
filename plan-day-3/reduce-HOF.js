const numbers=[1,2,3,,5,6,7,78];
const sum = numbers.reduce((acc, num) => acc+num, 0);
console.log(sum);
