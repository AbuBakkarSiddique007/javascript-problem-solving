// Problem 2: Check Even or Odd  [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4  → Output: true
// Input: 7  → Output: false
// Hint: Use the modulus (%) operator.

// Method: 01
function isEven1(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven1(10));
console.log(isEven1(3));

// method: 02
function isEven2(n) {
  return n % 2 === 0;
}

console.log(isEven2(10));
console.log(isEven2(3));

// method: 03
const isEven3 = (n) => n % 2 === 0;
console.log(isEven3(33));
console.log(isEven3(34));
