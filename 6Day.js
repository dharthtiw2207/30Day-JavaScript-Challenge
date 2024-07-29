//Activity 1: Array Creation and Access
//Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

console.log("\nArray Creation and Access")

const num = [1,2,3,4,5];
console.log(num)

//Task 2: Access the first and last elements of the array and log them to the console.
console.log("\nArray Creation and Access")

const FE = num[0];
const LE = num[num.length - 1];

console.log(FE);
console.log(LE)

//Activity 2: Array Methods (Basic)
//Task 3: Use the push method to add a new number to the end of the array and log the updated array.
console.log("\nArray Methods (push)")

num.push(6);
console.log(num)

//Task 4: Use the pop method to remove the last element from the array and log the updated array.

console.log("\nArray Methods (pop)")

num.pop();
console.log(num);

//Task 5: Use the shift method to remove the first element from the array and log the updated array.

console.log("\nArray Methods (shift)")

num.shift();
console.log(num);

//Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

console.log("\nArray Methods (unshift)")

num.unshift();
console.log(num);

//Activity 3: Array Methods (Intermediate)
//Task 7: Use the map method to create a new array where each number is doubled and log the new array

console.log("\nArray Methods (map method)")

const DN = num.map(num => num * 2);
console.log(DN);

//Task 8: Use the filter method to create a new array with only even numbers and log the new array.

console.log("\nArray Methods (filter method)")

const EN = num.filter(num => num % 2===0);
console.log(EN)

//Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

console.log("\nArray Methods (reduce method)")

const sum = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum)

//Activity 4: Array Iteration
//Task 10: Use a for loop to iterate over the array and log each element to the console.

console.log("\nArray Iteration (loop to iterate)")

for (let i = 0; i< num.length; i++){
    console.log(num[i]);
}

//Task 11: Use the forEach method to iterate over the array and log each element to the console.

console.log("\nArray Iteration (forEach method to iterate)")

num.forEach(num => console.log(num))

//Activity 5: Multi-dimensional Arrays
//Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

console.log("\nMulti-dimensional Arrays(two-dimensional array (matrix))")

const matrix =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix)

//Task 13: Access and log a specific element from the two-dimensional array.

console.log("\nMulti-dimensional Arrays(specific element from the two-dimensional array)")

const SE = matrix[1][0];
console.log(SE)