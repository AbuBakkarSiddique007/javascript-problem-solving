// Problem 10: Count Occurrences of a Character  [Easy]
// Description: Write a function countChar(str, char) that returns how many times a character appears in a
// string.
// Example:
// Input: 'banana', 'a'  → Output: 3
// Hint: Use split(char).length - 1 or a loop.



// Method 1: Using a Loop
function countChar1(str, char) {
  str = str.toLowerCase();
  char = char.toLowerCase();

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

// console.log(countChar1("bakkar", "k"));
// console.log(countChar1("riki", "i"));



// Method 2: Using for...of
function countChar2(str, char) {
  str = str.toLowerCase();

  char = char.toLowerCase();

  let count = 0;
  for (let c of str) {
    if (c === char) {
      count++;
    }
  }

  return count;
}

// console.log(countChar2("aaayyy", "a"));

// Method 3: Using split()
function countChar3(str, char) {
  return str.split(char).length - 1;
}
// console.log(countChar3("ggggaa", "g"));

// Method 4: Using filter()
function countChar4(str, char) {
  return str.split("").filter((word) => word === char).length;
}

console.log(countChar3("ggggaa", "g"));

// Note: filter() creates a new array and keeps only the elements for which the callback function returns true.
