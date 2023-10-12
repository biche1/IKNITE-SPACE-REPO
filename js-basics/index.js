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
//if input is divisible by 3 display fizz
//if input is divisible by 5 display buzz
//if input is divisible by both 3 and 5 display fizzBuzz
//if input is not a number display "Not a Number"
//else return input
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

//checkspeed function
//speed limit =70;\
//5km above limit -> 1 point
//>12 points -> liscense suspended
function checkSpeed(speed){
    const speedLimit = 70;
    kmPerPoint = 5;
    if (speed <= speedLimit + kmPerPoint){ 
    console.log("OK");
    return;
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
    console.log ("Liscense suspended");
    else console.log("points", points);
}

console.log(checkSpeed(180));

//showNumbers function
//prints from a set limit to another set limit and tells if theyre odd or even 
function showNumbers(limit){
    for (i=0; i <= limit; i++){
        if(i % 2 === 0) console.log(i, "EVEN");
        else console.log(i, "ODD");
        
    }
}
console.log(showNumbers(10));
//another implementation
function showNumbers(limit){
    for (i=0; i <= limit; i++){
        const message = (i % 2 === 0 ? "EVEN" : "ODD");
        console.log(i, message);
    }
    
}
//counting the number of truthy values
function countTruthy(array) {
   let count = 0;
   for (let value of array)
    if (value)
    count++;
return count;
}
//sow array properties
const movie = {
    title : "vampire diaries",
    releaseYear: 2011,
    rating: 5
}
function showProperties(obj) {
    for (key in obj){
        if (typeof obj[key] ==="string")
        console.log(key, obj[key]);
    }
}
console.log(showProperties(movie));