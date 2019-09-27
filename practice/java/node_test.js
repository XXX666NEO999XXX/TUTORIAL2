// This is a single line comment.

/*
This is a
multi-line
comment!
*/

//console.log() takes a value and passes it to the console.
console.log("Welcome Grandmaster.");
console.log("How may I assist you?")

// Basic Datatypes of Javascript

//String Datatype
"This is a string of characters";
'This is also a string'
"Yet another string!";
"1999"
"false"

// Number Datatype

1999;
115;
777;

// Boolean Datatype (keywords)
true;
false;

// Creating a variable;
// Syntax: var nameOfVariable;
var message;

message = "Initiating Cyber Initiative Protocol..."

//Grab the value of the message variable and send it to the console.
console.log(message);

// Variables can only hold one value at a time, so we are overwriting the previous value in the message when we reassign.
message = "Overwriting System..."

// Because this console.log() happened after the update, we will get the new value to the console.
console.log (message);
 
var variable1 = "string";
var variable2 = 1999;
var variable3 = true;

console.log(variable1)
console.log(variable2, variable3);

// Bad example of a variable name;
var ThisisareAAllyBadExxampleOFavariable = 20;

// Acceptable example of a variable name;
var importantVar= 20;

// Acceptable example of a variable name, be a little descriptive with what the variable holds for its name.
var y = 10;

// END OF BASIC JAVASCRIPT.

var value1 = 100;

var value2 = value1;
console.log(value2);
//Order of operations for equal sign:
//runs second = runs first;

//Math Operators.
/*
+addition
-subtraction
/division
*multiplication
%modulo
*/

var sum = 39 + 74 + 1 + 4 + 300 + 3999;
var difference= 100 - 30;
var quotient = 10 / 3;
var product = 100 * 2;

// These math operators are only available to Number datatype.
/*
You cannot do this:
var diff = true / "string";
var other = "another string" * 100;
*/

// The + operator has two usages. The second one is called concatination.
var wholesentence = "My name is" + " Daniel!";
console.log(wholesentence);


// Good use of concatination.
var userName= " Master";
var sentencePart1= "Hello there,";
var sentencePart2= ",how are you doing?";

var complete = sentencePart1 + userName + sentencePart2;
console.log(complete);

// Using variable to do math on changing data.

var num1 = 1900;
var num2 = 11;

var sum1 = num1 + num2;
var difference1 = num1 - num2;
var difference2= num2 - num1;

// Redefining Variables.
var createdVariable;
createdVariable = 8008;

// createdVariable was already defined;
// var createdVariable2 = 100;

// Order of Operations

var someValue = 10 - 36/ 6 * 3;
// 8,

//8, -8

console.log(someValue);

var otherValue = 10 + (10 + ( ( 3+4 ) * 2));
var otherValue2 = 34;

// If Else Statement

if (true) {console.log("this is true!");}

// Conditional Operators
/*
==Both sides are equal
=> Left side is equal or bigger
=< Left side is equal or smaller
< Left side is smaller
> Left side is bigger
!= Not equal to
! Flip Boolean 
*/

10==100;//false
9==9;//true
"hello"=="hello";// true
"Hello" == "hello"; //false
"hello"== 100; //false
100>50;//true
100>=100;//true
101<=100;//false
1>10;//false
1<10;//true
100!=50;//true
50!=50;//false
!false;//true
!true;//false
true!=true;//false
false==false;//true

var age =100029;

if(age>=21){
    console.log("Congratz, you can now drink Soda.");
}

