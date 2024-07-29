//Activity 1: Function Declaration
//Task 1: Write a function to check if a number is even or odd and log the result to the console.

console.log("\nFunction Declaration")

function checkEvenOdd(number){
    if(number % 2 === 0){
        console.log(`${number} is even`);
    }else{
        console.log(`${number} is odd`)
    }
}

checkEvenOdd(4); 
checkEvenOdd(5); 

//Task 2: Write a function to calculate the square of a number and return the result.
console.log("\nSquare of a number using Function Declaration")

function sq(num){
    return num * num;
}
console.log(sq(5))

//Activity 2: Function Expression
//Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
console.log("\nFunction Expression")

const findMax = function(a, b) {
    let max = a > b ? a : b;
    console.log(`The maximum of ${a} and ${b} is ${max}`);
}
findMax(100, 10);

//Task 4: Write a function expression to concatenate two strings and return the result
console.log("\nconcatenate two strings")


const concatenateStrings = function(str1, str2){
    return str1 + str2 ;
}
console.log("Hello ", "World");
console.log(concatenateStrings("Hello, ", "World!")); 

//Activity 3: Arrow Functions
//Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
console.log("\nArrow Functions")

const sum = (a,b) => a+b;

console.log(sum(5,5))

//Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
console.log("\nArrow Functions with boolean value")

const CC = (str,char) => str.includes(char);

console.log(CC("Hello", "e"));
console.log(CC("World", "a"));

//Activity 4: Function Parameters and Default Values
//Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

console.log("\nFunction Parameters and Default Values")

function multiply(a,b=1){
    return a*b;
}

console.log(multiply(5, 3));
console.log(multiply(4));    

//Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
console.log("\nDefault Values with greeting message")

function GT(name, age = 25){
    return `Hello, my name is ${name} and I am ${age} years old`;
}
console.log(GT("Sid", 24));
console.log(GT("Toshi"))

//Activity 5: Higher-Order Functions
//Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

console.log("\nHigher-Order Functions")

function RF(fn,time){
    for(let i = 0; i< time; i++){
        fn()
    }
}

RF(()=> console.log("Love"),5);

//Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
console.log("\nHigher-order function that takes two functions and a value")

function AF(fn1, fn2, value){
    return fn2(fn1(value));
}
const double = x => x*2;
const increment = x => x + 1;

console.log(AF(double,increment, 5));

//Feature Request Scripts
//Even or Odd Function Script:
console.log("\nEven or Odd Function Script:")

function isEvenOrOdd(number) {
    return number % 2 === 0 ? "even" : "odd";
}

function logEvenOrOdd(number) {
    console.log(`The number ${number} is ${isEvenOrOdd(number)}`);
}

logEvenOrOdd(10);
logEvenOrOdd(7);   
