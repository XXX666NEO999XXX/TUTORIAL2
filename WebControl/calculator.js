// Function syntax.
// function keyword + function name + parenthasis + codeblock

function myfunction() {
    console.log("Initiating...");
    console.log("Welcome Grandmaster");
    console.log("How may I assist you?");
}

myfunction();
myfunction();
myfunction();

function math() {
    console.log(1 + 1);
    console.log(2 - 1);
    console.log(4 / 2);
    console.log(5 * 2);
}

math();

/*
if (raining)
{if(umbrella)
    {"take umbrella";}
    else{"take uber"}} 
else {Have a great day!};
*/

math2(22,47);
math2(30,43);
math2(7,99);
math2(55,6);

function math2(firstNumber, secondNumber) {
  

var description = " The following values were generated from " + firstNumber + " and " + secondNumber + " . ";
console.log(description);

var sum = firstNumber + secondNumber; 
var sumSentence = "The sum is: " + sum;
console.log (sumSentence);

var difference= firstNumber - secondNumber;
var differentSentence = "The difference is: " - difference;
console.log(differentSentence);


var divide= firstNumber / secondNumber;
var divideSentence = "The quotient of: " / divide;
console.log(divideSentence);

var multiply= firstNumber * secondNumber;
var multiplySentence = "The product of: " * multiply;
console.log(multiplySentence);

}



