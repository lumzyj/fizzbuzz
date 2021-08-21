const prompt = require('prompt-sync')({sigint: true});
var a, b, c, d
var root1, root2
var a = prompt('enter the value for a')
console.log(`the value is ${a}` );
var b = prompt('enter the value for b')
console.log(`the value is ${b}`);
var c = prompt('enter the value for c')
console.log(`the value is ${c}`);
 
 var root1 = (((-1*b) + Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
 var root2 = (((-1*b) - Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
 d = root1&&root2

console.log(`the answer is${d}`);