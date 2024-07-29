//Activity 1: Arithmetic OOperator

//Task 1: Write a program to add two numbers and log the result to the console
console.log("\nArithmetic Operator")
let num1 = 30;
let num2 = 20;

let sum = num1 + num2;
console.log('Task 1 - Addition: ' + num1 + ' + ' + num2 + ' =', sum);

//Task 2: Write a program to subtract two numbers and log the result to the console

let num3 = 30;
let num4 = 20;

let sub = num1 - num2;
console.log('Task 2 - Subtraction: ' + num3 + ' - ' + num4 + ' =', sub);


//Task 3: Write a program to multiply two numbers and log the result to the console

let num5 = 10;
let num6 = 5;

let mul = num5 * num6;
console.log('Task 3 - Multiply: ' + num5 + ' * ' + num6 + ' =', mul);


//Task 4: Write a program to divide two numbers and log the result to the console

let num7 = 20;
let num8 = 2;

let div = num7 / num8;
console.log('Task 4 - Divide: ' + num7 + ' / ' + num8 + ' =', div);

//Task 5: Write a program to remainder two numbers and log the result to the console

let num9 = 20;
let num10 = 3;

let rem = num9 % num10;
console.log('Task 5 - Remainder: ' + num9 + ' % ' + num10 + ' =', rem);

//Activity 2: Assignment Operator
console.log("\nAssignment Operator")

//Task 6: Use the += operator to add a number to a variable and log the result to the console.

let addAssign = 50;
addAssign += 50;
console.log('Task 6 - After += operation:', addAssign);

//Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

let subAssign = 100;
subAssign -= 50;
console.log('Task 7 - After -= operation:', subAssign)


//Activity 3: Comparison Operator
console.log("\nComparison Operator")

//Task 8: Write a program to compare two numbers using > and < and log the result to the console.

let num11 = 25;
let num12 = 10;

console.log('Task 8 - Is num11 > num12?', num11 > num12);
console.log('Task 8 - Is num11 < num12?', num11 < num12);

//Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

let num13 = 5;
let num14 = 5;

let num15 = 5;
let num16 = 2;


console.log('Task 9 - Is num13 >= num14?', num13 >= num14);
console.log('Task 9 - Is num15 <= num16?', num15 <= num16);

//Task 10: Write a program to compare two numbers using == and === and log the result to the console.

let num17 = 10;
let num18 = "10";

console.log('Task 10 - Is num17 == num18?', num17 == num18);
console.log('Task 10 - Is num17 === num18?', num17 === num18); 


//Activity 4: Logical Operator
console.log("\nLogical Operator")

//Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

let condition1 = true;
let condition2 = false;

console.log('Task 11 - condition1 && condition2:', condition1 && condition2);

//Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

let condition3 = true;
let condition4 = false;

console.log('Task 12 - condition3 || condition4:', condition3 || condition4);

//Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

let condition5 = true;
console.log('Task 13 - !condition5:', !condition5);

//Activity 5: Ternary Operator
console.log("\nTernary Operator")

//Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let number = -10;
let result = number >= 0 ? 'Positive' : 'Negative';
console.log('Task 14 - The number is:', result);


// Feature Request 1: Arithmetic Operations Script
console.log("\nFeature Request 1:")

// Addition
let nums1 = 10;
let nums2 = 5;
let sums = num1 + num2;
console.log('Addition:', nums1 + ' + ' + nums2 + ' =', sums);

// Subtraction
let difference = nums1 - nums2;
console.log('Subtraction:', nums1 + ' - ' + nums2 + ' =', difference);

// Multiplication
let product = nums1 * nums2;
console.log('Multiplication:', nums1 + ' * ' + nums2 + ' =', product);

// Division
let quotient = nums1 / nums2;
console.log('Division:', nums1 + ' / ' + nums2 + ' =', quotient);

// Remainder
let remainder = nums1 % nums2;
console.log('Remainder:', nums1 + ' % ' + nums2 + ' =', remainder);


// Feature Request 2: Comparison and Logical Operators Script
console.log("\nFeature Request 2:")

let a = 15;
let b = 10;

// Comparison Operators
console.log('Is a > b?', a > b);
console.log('Is a < b?', a < b);
console.log('Is a >= b?', a >= b);
console.log('Is a <= b?', a <= b);
console.log('Is a == b?', a == b);
console.log('Is a === b?', a === b);

// Logical Operators
let conditions1 = a > b;
let conditions2 = b < 20;

console.log('conditions1 && conditions2:', conditions1 && conditions2); 
console.log('conditions1 || conditions2:', conditions1 || conditions2);
console.log('!conditions1:', !conditions1);

// Feature Request 3: Ternary Operator Script
console.log("\nFeature Request 3:")

let numbers = -7;
let results = numbers >= 0 ? 'Positive' : 'Negative';
console.log('The numbers is:', results);


