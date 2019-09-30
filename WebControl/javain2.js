//AI if true and else.
console.log("Welcome.");


if (true) {
console.log("Access Granted")
} else {
console.log("Access Denied.")
}

//Access by age
var age = 19

    if (age>=21) {
        console.log("Access Granted")
        } else if(age>=18){
        console.log("Access Partially Granted.")
        } else {console.log ("Access Denied.")}


// Access by password
var password2 = 4444
var password = 3333
        if (password=3333) {
            console.log("Access Granted")
            } else if(password2=4444){
            console.log("Access Partially Granted.")
            } else {console.log ("Access Denied.")}

            //IF, ELSE IF
            // if () {} else if () {}

            // IF, ELSE
            // if () {} else {}

            // OR Operator written as ||

            if (false || false) {
console.log ("Either was true!")}

var age2 = 10;
if(age2 ==5 || 6){console.log("you are a brat!")};

//AND operator written as &&

if (true&&false) {console.log("Both of these are true!")}

// && FIRST, || SECOND
if(false&& true || true && true) { console.log ("Ihave no clue!")}

// ORDER MATTERS
if (false&& (true || true) && true) {
console.log("I have no clue!");

}
            
    if (age == 0) {
console.log ("CONGRATULATIONS ON BEING BORN, LIFE IS HARD, GOOD LUCK!")
    } else if ( age > 0 && age < 18 ) {console.log("kid!");}
    else if (age > 17 && age < 65) {console.log("Adult!");}
    else if (age > 64) { console.log ("Elder!");}
    else{console.log('you are not born yet!');}

    var numberTester = -100;
    if(numberTester >=0) {console.log("this number is positive!");}
    else if (numberTester < 0) {console.log("this number is a negative number!");}

    var testForLetterB = "B"

    if(testForLetterB == "b" || testForLetterB == "B"){console.log ("this character is a B character!");}

    // Truesies and Falsies

    //Falsies
    false;
    0;
    "";
    undefined;
    null;

    //Trusies
    // > 0;
    // < 0;
    "anything";
    "false";
    "0";

var test = "null"

    if(test){
console.log("The value of" + test + " is truthy!");

    }

    console.log ("My favorite Number is " + 8);

    /*Variables
    Datatypes
    If statements, If Else If Else
    Logical Operators || Comparitors
    AND and OR operators || && ||
    Truthy and Falsey values
    */