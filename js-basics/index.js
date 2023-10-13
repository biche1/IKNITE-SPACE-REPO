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

//sum limit sum
//returns sum of all numbers that are multiples of 3 AND 5 from 0 to limit
function sum(limit){
    sum = 0;
    for (i=0; i<=limit; i++){
        if((i % 3 === 0) || (i % 5 === 0))
        sum += i;
    }
    return sum;
}
console.log(sum(30));

//calculating average grade
// const marks = [80, 80, 50];
// function calculateGrade(marks) {
//     const average = calculateAverage(marks);
//     if (average < 60) return 'F';
//     if (average < 70) return 'D';
//     if (average < 80) return 'C';
//     if (average < 90) return 'B';
//     return 'A';
// }
// function calculateAverage(array){
//    let sum =0;
//    for (let value of array)
//    sum += value;
// let average = sum / array.length;
// }
// console.log (calculateGrade(91));

//showStars exercise
function showStars(rows) {
    for (let row=1; row <= rows; row++){
       let pattern = '';
    for (i=0; i<row;i++)
        pattern += "*";
    console.log(pattern);   
    }
}
console.log(showStars(5));

//show primes
//takes a limit anad shows all the prime numbers up to that limit

function showPrimes(limit){
    for(let number=2; number<=limit; number++)
        if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0) 
            return false
        return true      
    }
    console.log(showPrimes(25));

    //creating objects 
    //
//     const address = {
//         street: 'a',
//         city: 'b',
//         zipcode: 'c'
//     };
//      function showAddress(address){
//             for(let key in address)
//             console.log(key, address[key]);
//         }
    
// showAddress(address);

// // function
//  let address = new Address('a', 'b', 'c');
//  console.log (address1);
 
//  // factory function
//  function createAdress(street, city, zipcode){
//     return {
//         street,
//         city,
//         cityzipcode
//     };
//  }
//  //constructor function
//  function Address (street, city, zipcode) {
//     this.street = street;
//     this.city = city;
//     this.zipcode = zipcode;
//  }
  
// let post = {
//     title : 'a',
//     body : 'b',
//     author: 'c',
//     views: 10,
//     comments: [
//         { author: 'a', body: 'b'},
//         { author: 'c', body: 'd'},
//     ],
//     isLive: true
// };

//POST function
let post = new Post('a','b','c');
console.log(post);
function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLIve = false;
}

// An array 
const numbers = [3,4];
//adding elements to the end of the array
numbers.push(5,6);
//adding to the beginning
numbers.unshift(1,2);
//adding to the middle of the array
numbers.splice(2,0, 'a', 'b');
//finding elements in an array (primitives)
const nums = [1,3,4,5];
console.log(nums.indexOf(1));