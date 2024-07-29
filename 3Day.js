//Activity 1: If-Else Statements

//Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

console.log("\nIf-Else Statements")
function checkNo(num){
    if (num>0){
        console.log("The Number is Positive.");
    }
    else if (num<0){
        console.log("The number is negative.")
    }
    else{
        console.log("The number is zero.")
    }
}

checkNo(-55);
checkNo(88);
checkNo(0);

//Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

function checkVotingEligibility(age){
    if (age>=18){
        console.log("The person is eligible to vote.")
    }
    else {
        console.log("The person is not eligible to vote.");
    }
}

//Activity 2: Nested If-Else Statements

console.log("\nNested If-Else Statements")

//Task 3: Write a program to find the largest of three numbers using nested if-else statements.

function findLargest(a,b,c){
    if (a > b){
        if(a > c){
        console.log(a + " is the largest number.")
    }
    else{
        console.log(c + " is the largest number.")
    }
}else{
    if(b > c){
        console.log(b + " is the largest number.");
    }
    else{
        console.log(c + " is the largest number.")
    }
}
}

findLargest(10, 20, 30); 
findLargest(50, 20, 10);


//Activity 3: Switch Case

console.log("\nSwitch Case")

//Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day number.");
    }
}

getDayOfWeek(1); 
getDayOfWeek(5);

//Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

console.log("\nSwitch Case (assign a grade )")

function getGrade(score) {
    let grade;
    switch (true) {
        case score >= 90:
            grade = 'A';
            break;
        case score >= 80:
            grade = 'B';
            break;
        case score >= 70:
            grade = 'C';
            break;
        case score >= 60:
            grade = 'D';
            break;
        default:
            grade = 'F';
    }
    console.log("The grade is " + grade);
}

getGrade(95); 
getGrade(75); 


//Activity 4: Conditional (Ternary) Operator

console.log("\nConditional (Ternary) Operator")

//Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

function checkEvenOdd(num) {
    let result = (num % 2 === 0) ? "The number is even." : "The number is odd.";
    console.log(result);
}

checkEvenOdd(4); 
checkEvenOdd(7);

//Activity 5: Combining Conditions

console.log("\nCombining Conditions")

//Task 7: Write a program to check if a year is a leap year using multiple conditions and log the result to the console.

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}

isLeapYear(2020); 
isLeapYear(1900); 



