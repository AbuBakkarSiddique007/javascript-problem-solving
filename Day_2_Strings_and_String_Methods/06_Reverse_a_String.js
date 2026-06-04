// Problem 6: Reverse a String  [Easy]
// Description: Write a function reverseString(str) that returns the reverse of a given string.
// Example:
// Input: 'hello'   → Output: 'olleh'
// Input: 'world'   → Output: 'dlrow'
// Hint: Use split(''), reverse(), and join('').

// Method 1: Using split() + reverse() + join() (Most Common)
function reverseString1(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString1("abcd"));

// Method 2: Using a for Loop (Without Built-in Reverse)
function reverseString2(str) {
  let reversed = "";

  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }

  return reversed;
}

console.log(reverseString2("xyz"));

// Method 3: Using for...of Loop
function reverseString3(str) {
  let reversed = "";

  for (const char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

console.log(reverseString3("mnop"));
