function reverseString3(str) {
  let reversed = "";

  for (const char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

console.log(reverseString3("mnop"));