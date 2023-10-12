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
function maxnum(a, b) {
    return (a>b) ? a : b;
}