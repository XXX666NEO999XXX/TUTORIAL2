
 
var someNumber = 50.30403;

//Rounds to nearest integer
var results = Math.round(someNumber);

var sentence = "The number " + someNumber + " rounded is " + results + " ! ";

console.log (sentence)

//Rounds to the top interger
var ceiling = Math.ceil(45.2);
console.log ( Math.ceil(45.2) );
//Rounds to the lower integer
console.log ( Math.floor(45.8) );

//arguement 1 power to arguement 2.
console.log ( Math.pow(10, 3));

//Square root of Arguement 1.
console.log( Math.sqrt(100) );

//Create a random number between 0 and .999999~
var random= Math.random();

var negative = random * -1;

//take random number and multiply by 10, range will hold product.
var range = random * 10;

//take range value and round up, then store number in wholeNumber variable
var wholeNumber = Math.ceil(range);

//Send wholeNumber value to console.
console.log (wholeNumber);

// parseInt attempts to convert a string into a Datatype number.
parseInt("1000"); // Number 1000
parseInt("Hello"); //probably NaN
parseInt("100Hello"); //Number 100
parseInt("hello100"); //Nan

var floatNumber = parseFloat("1000.303000"); //1000.30300
parseInt("1000.303000");//Number 1000
console.log(floatNumber);

//example of complex code that generates a number between 1 and 10 and sends it directly to the console.
console.log (Math.floor((Math.random() * 10) + 1));

//Finds the character at position 7 (starting from 0) and sends that character to the console.
console.log("Hello World!".charAt(7));

// Find the character in the string, and return the position number and send it to the console.
console.log("Hello World!".indexOf("l"));