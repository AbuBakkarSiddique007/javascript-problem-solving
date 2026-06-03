// Problem 3: Find the Largest of Three Numbers  [Easy]
// Description: Write a function largest(a, b, c) that returns the largest of three numbers.
// Example:
// Input: 3, 7, 5  → Output: 7
// Hint: Use Math.max() or if-else conditions.

// 01:
function largestNumber1(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(largestNumber1(10, 20, 30));

// 02:
function largest3(a, b, c) {
  return Math.max(a, b, c);
}
console.log(largest3(100, 200, 300));

// 03:
const largestNumber2 = (a, b, c) =>
  a > b && a > c ? a : b > a && b > c ? b : c;
console.log(largestNumber2(1, 2, 3));
