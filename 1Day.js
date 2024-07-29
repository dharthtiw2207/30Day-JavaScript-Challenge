//Activity 1: Variable Declaration
console.log("\nVariable Declaration")

//Task 1: Declare a variable using var, assign it a number, and log the value to the console:

var num = 1722;
console.log(num)

//Task 2: Declare a variable using let, assign it a number, and log the value to the console:

let SV = "Hii Sid";
console.log(SV)

//Activity 2: Constant Declaration
console.log("\nConstant Declaration")

//Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console:

const BV = true;
console.log(BV);


//Activity 3: Data Types
console.log("\nData Types")
//Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable:

let Num = 4;
console.log(Num);

let String = "Hii JS!!";
console.log(String);

let booleann = false;
console.log(booleann);

let object = {name: "Sid",
    age: 17
};
console.log(object);

let Array = [1,2,3,4,5];
console.log(Array);


//Activity 4: Reassigning Variables
console.log("\nReassigning Variables")
//Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values:


let reassig = "Siddddd";
console.log(reassig);

reassig = "Sid Tiw";
console.log(reassig);


//Activity 5: Understanding const
console.log("\n Understanding const")

//Task 6: Try reassigning a variable declared with const and observe the error:


const constvar = 500;
console.log(constvar);


//Feature Request

//1. Variable Types Console Log:
console.log("\n Variable Types Console Log")


let numberVar = 55;
console.log('numberVar:', numberVar, 'Type:', typeof numberVar);

let stringVar = "Hello, JavaScript!";
console.log('stringVar:', stringVar, 'Type:', typeof stringVar);


let booleanVar = true;
console.log('booleanVar:', booleanVar, 'Type:', typeof booleanVar);


let objectVar = { name: "Sid", age: 23};
console.log('objectVar:', objectVar, 'Type:', typeof objectVar);

let arrayVar = [1, 2, 3, 4, 5];
console.log('arrayVar:', arrayVar, 'Type:', typeof arrayVar);


//2. Reassignment Demo:
console.log("\n Reassignment Demo")


let mutableVar = "Sid";
console.log('mutableVar before reassignment:', mutableVar);

mutableVar = "Sid Tiw";
console.log('mutableVar after reassignment:', mutableVar);

const immutableVar = "Siddhartha Tiwari";
console.log('immutableVar:', immutableVar);
