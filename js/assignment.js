"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

// Function to find the smallest number
function findSmallestNumber(numbers) {
    let smallest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest;
}

// Function to find the largest number
function findLargestNumber(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

// Function to find the average of the numbers
function findAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

function render() {
    // Find and display the smallest number
    const smallestNumber = findSmallestNumber(myNumbers);
    smallestNumberElement.innerText = `The smallest number is ${smallestNumber}.`;

    // Find and display the largest number
    const largestNumber = findLargestNumber(myNumbers);
    largestNumberElement.innerText = `The largest number is ${largestNumber}.`;

    // Find and display the average number
    const averageNumber = findAverage(myNumbers);
    averageNumberElement.innerText = `The average number is ${averageNumber.toFixed(2)}.`;
}

submissionBtn.addEventListener("click", function () {
    render();
});
