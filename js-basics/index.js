console.log('Hello World');
// swapping variables
let a ="red";
let b ="blue";
let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

//returning the maximum of two numbers
function max(num1, num2) {
    if (num1 > num2)
        return num1;
    else
        return num2;
    console.log(max(3,5));
}
//returning the maximum of two numbers (shorter method)
function maxNum(a, b) {
    return (a>b) ? a : b;
}
//function to check if a picture is landscape or portrait
function isLandScape(Width, height) {
    return (Width > height);
}
//fizzbuzz algorithm
const output = fizzBuzz(("ape"));
console.log(fizzBuzz("output"));
function fizzBuzz(input){
    if (typeof input  !== 'number')
    return "Not a Number";
    if (input % 3 === 0)
    return "Fizz";
    if (input % 5 === 0)
    return"Buzz";
    if ((input % 3 === 0)  && (input % 5 === 0))
    "FizzBuzz";
    return input;
}
