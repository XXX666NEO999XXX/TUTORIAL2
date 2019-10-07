var mySecondArray = [
    "value",
     1000,
    true,
    "cool",
];

var myFirstObject = {
key:"value", 
money:1000,
rain:true,
plasmagun: true,
data4:"cool",
};

//Accessing "cool" in array.
console.log("Array Version: " + mySecondArray[3]);

//Accessing "cool" in object.
console.log ("Object Version: " + myFirstObject["data4"], myFirstObject ["money"]),;

//Updating a value inside of an Object.
myFirstObject["rain"]=false;

//Adding a new key-value to an existing Object.
myFirstObject["day"] = "sunny";

mySecondArray[1000]=1;
mySecondArray[1000]=2;
mySecondArray[1000]=[1,2];

console.log(myFirstObject)
console.log(mySecondArray)

