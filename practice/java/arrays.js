var myVariable = "One thing at a time";

myvariable="This is a new value";

var firstDay = "Monday";
var secondDay="Tuesday";

//....

//Array Syntax: [ firstValue, secondValue, thirdValue]
var weekNames= ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log(weekNames);

//Call the second value in the array, and send it to the console.
console.log ( weekNames[1]);

console.log (weekNames [4]);

// Array Methods/ Functions

// Add element to the end of the array : push();
weekNames.push("Superday");

console.log(weekNames);

weekNames.push("Funday");

console.log(weekNames);

//Remove an element at the start of the array: shift();

weekNames.shift();
console.log(weekNames);

weekNames.shift();
console.log(weekNames);

//Restoring array using restore methods
weekNames.unshift("Tuesday");
weekNames.unshift("Monday");
//weekNames.unshift("Monday","Tuesday");

// Remove from the end.
weekNames.pop()
weekNames.pop()

console.log(weekNames);

//Challenge: move Sunday to the beginning of the array without writing any strings in your code

var day = weekNames.pop()
weekNames.unshift(day);
console.log(weekNames)

//challenge end

//Array Method Splice (), designed to extract a part of an array.

//weekNames.splice(3,1);
var splitArray = weekNames.splice(3,2);
splitArray [2] = "Friday";

console.log(splitArray);

//Update values to array by specifying the index number.
splitArray[0] = "Whensday";

console.log(splitArray);

splitArray[10] = "Hiddenday";

console.log(splitArray);

//Arrays and Loops
var names = ["Alpha", "Sam", "Max", "Georgia" , "Giermo", "Horacio", "Batman", "Bill", "Mackaw", "Robin"]


//Instead of 10, we use . legnth so we always loop for the exact number of items of the names array
for (var counter = 0; counter < 10; counter = counter + 1){
    console.log("Hello"+ names [counter] + "!");
}

//for (var i = 0, i < 10 ; i ++) {}
