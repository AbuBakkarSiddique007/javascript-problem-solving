// Problem 8: Check Palindrome  [Easy]
// Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and
// backwards.
// Example:
// Input: 'racecar'  → Output: true
// Input: 'hello'    → Output: false
// Hint: Compare the string to its reverse.


// Method 1: Compare String with Its Reverse
function isPalindrome1(str) {
  let reversed = str.split("").reverse().join("");

  return str === reversed;
}

console.log(isPalindrome1("racecar"));
console.log(isPalindrome1("abu"));
console.log(isPalindrome1("12321"));
