// Do While Loop
// For Loop
// While Loop
// .foreach() -not covered


//Syntax of Do While

//do {/*code*/} while (true); // Because the value of true never changes, the loop will never end.

var aVariable = true;
var counter = 0;

do {

    //Grab the value of counter (after the =), then add a 1 to it, finally store the results back into the counter (before the =).
counter = counter + 1; //counter++

console.log("The value of counter is: " + counter);
if (counter > 500) {
    aVariable = false
}

} while (aVariable);


//Create a string to play with, a counter(i), a condition to stop the loop (loopContinue), and a variable to hold the number of characters of the string (legnthOfString)
var stringToTest = "This has to be a really long sentence so we have the chance to count a character twice.";
var i = 0;
var loopContinue = true;
var lengthOfString = stringToTest.length;
//console log the lengthOfString value.
console.log (lengthOfString)


do {
    
// Pull a character based on the current loop number (i) using the charAt function.
   var character = stringToTest.charAt(i)
//Add a 1 to the counter (i).
   i = i + 1;


//Console log the current value of the character.
    console.log(character)
    
    
//Test to see if the loop is longer than the length of string, and stop the loop if it is.
if (i >= lengthOfString) {
loopContinue = false;
}
// After running the code check loopContinue to see if we should run this loop again.
} while(loopContinue);



