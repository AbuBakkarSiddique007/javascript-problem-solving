// Problem 11: Find the Sum of an Array  [Easy] 
// Description: Write a function sumArray(arr) that returns the sum of all numbers in an array. 
// Example: 
// Input: [1, 2, 3, 4, 5]  → Output: 15 
// Hint: Use reduce() or a for loop. 


// Method 1: Using a for Loop
function sumArray1(arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {

        sum = sum + arr[i]

    }
    return sum
}

console.log(sumArray1([1, 2, 3, 4, 5]));



// Method 2: Using for...of Loop
function sumArray2(arr) {
    // arr = [1,2,3,4,5]

    let sum = 0;

    for (let a of arr) {
        sum = sum + a
    }

    return sum
}

console.log(sumArray1([1, 2, 3, 4, 5]));



// Method 3: Using reduce()
function sumArray3(arr) {
    return arr.reduce((sum, num) => sum + num, 0)
}


console.log(sumArray3([1, 2, 3, 4, 5]));