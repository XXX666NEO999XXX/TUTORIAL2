var employees= []; // Array holding all of our employees


var employee1 = {
    firstName: "Daniel",
    lastName: "Ibanez",
    age: 20,
    salary: 20000,
    status: "alive",
    life: "Newark",
    startDate: "September 16,1999",
}

var employee2 = {
    firstName: "Phil",
    lastName: "Johnson",
    age: 50,
    salary: 85000,
    status: "dead",
    life: "Los Angeles",
    startDate:"January 1954",
}
 
var employee3 = {
    firstName: "Sally",
    lastName: "Peters",
    age:70,
    salary:250000,
    status: "alive",
    life: "New York",
    startDate: "January 1999",
}

employees.push(employee1);
employees.push(employee2);
employees.push(employee3);

console.log(employees);

// Only use employees array.

employees [1]["life"]="San Diego";

console.log(employees);

"hello there!".length;
employees.length;

//Dot Notation access for Objects
employees[0].status;

//Not valid
//employees[0].first Name;

// Bracket Notation access for objects and Arrays.
employees[0]["status"];
employees[0]["firstName"]

employee3.age;
employee3["age"];