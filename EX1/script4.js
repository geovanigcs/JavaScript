let num1 = 0.7;
let num2 = 0.1;

num1 += num2;   //<= num1 = num1 + num2;
num1 += num2;
num1 += num2;
num1 = Number(num1.toFixed(2));  // ou também => num1 = ((num1 * 100) + (num2 * 100)) / 100;
console.log(num1)
// console.log(num1.toString() + num2);
// num1 = num1.toString();
// console.log(num1.toString(2));
// console.log(num1.tofixed(2));
// console.log(Number.isInteger(num1));
