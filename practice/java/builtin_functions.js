

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
var range = random * 10;
var wholeNumber = Math.ceil(range);
console.log (wholeNumber);