// Problem 7: Count Vowels in a String  [Easy]
// Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in
// a string.
// Example:
// Input: 'hello'   → Output: 2
// Input: 'javascript' → Output: 3
// Hint: Use a loop or match() with a regular expression.

// Method 1: Using Loop + includes()
function countVowels1(str) {
  let count = 0;
  const vowels = "aeiou";

  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels1("hello"));
console.log(countVowels1("javascript"));

// Method 2: Using for Loop
function countVowels2(str) {
  let count = 0;

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }

  return count;
}

console.log(countVowels2("hello"));
console.log(countVowels2("HELLO"));

// Method 3: Using Array.includes()
function countVowels3(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels3("abubakkar"));
