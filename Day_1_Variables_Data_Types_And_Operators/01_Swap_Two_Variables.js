// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10 Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

// Method 01: Using destructuring
function swap1(a, b) {
  [a, b] = [b, a];

  return { a, b };
}
console.log(swap1(10, 20));

// Method 02: Using Arithmetic Operators
function swap2(a, b) {
  a = a + b; //a = 50 + 100 => 150
  b = a - b; //b = 150 - 100 => 50
  a = a - b; //a= 150 - 50 => 100

  return { a, b };
}

console.log(swap2(50, 100));

// Method 03: Using Multiplication and Division
function swap3(a, b) {
  a = a * b;
  b = a / b;
  a = a / b;

  return { a, b };
}

console.log(swap3(200, 250));

// Method 04 : Using third value:
function swap4(a, b) {
  let temp = a;

  a = b;
  b = temp;
  return { a, b };
}

console.log(swap4(4, 5));
