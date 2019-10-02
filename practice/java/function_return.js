
myFunction();

function myFunction() {
    var text = "Goodbye";
    return 1000;
    console.log("results");
}



Math.random();


myFunction()



//Practice

function output1() {
    var text = "Hello"
    return text;
}

var greetings = output1();
console.log(greetings)

function output2() {
    var number = 999
    return number;
}
var digits = output2()
console.log(digits)

//Data flow using a built in function.
var aNumber = 22000;

//Provide data to the Math.round() function using aNumber as an arguement.
Math.round(aNumber);

//*Do not write this in code* Math.round() will return a value of 22000, based on Line 50, and the line 50 would now look like:
22000;

function ourOwnRound(theNumber) {
    var results;
    var decimalOfTheNumber = theNumber % 1;
    if (decimalOfTheNumber >= .5) {
        results = Math.ceil(theNumber);
    } else{
        results = Math.floor(theNumber);
    }

    return results;

}

console.log(ourOwnRound(32.5));


// Equation to figure out just the decimal value.
//console.log(50.39 % 1);





