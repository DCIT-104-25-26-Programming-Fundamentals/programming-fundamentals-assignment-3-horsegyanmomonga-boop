// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

/**
 * Calculates the sum of all elements in an array.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - The total sum.
 */
function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

/**
 * Calculates the average of elements in an array.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - The average value.
 */
function calculateAverage(numbers) {
    return calculateSum(numbers) / numbers.length;
}

/**
 * Finds the maximum value in an array.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - The largest number.
 */
function calculateMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

/**
 * Finds the minimum value in an array.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - The smallest number.
 */
function calculateMin(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

/**
 * Main execution function to gather input and display statistical results.
 */
function main() {
    const count = readlineSync.questionInt('How many numbers? ');

    if (count <= 0) {
        console.log('Error: Please enter a positive integer greater than 0.');
        return;
    }

    const numbers = [];
    for (let i = 1; i <= count; i++) {
        const num = readlineSync.questionFloat(`Enter number ${i}: `);
        numbers.push(num);
    }

    console.log('\nResults:');
    console.log(`Sum:     ${calculateSum(numbers)}`);
    console.log(`Average: ${calculateAverage(numbers)}`);
    console.log(`Maximum: ${calculateMax(numbers)}`);
    console.log(`Minimum: ${calculateMin(numbers)}`);
}

main();

