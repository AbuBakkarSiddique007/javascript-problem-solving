// Problem 5: Check Positive, Negative or Zero  [Easy]
// Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of
// n.
// Example:
// Input: -5  → Output: 'negative'
// Input: 0   → Output: 'zero'
// Hint: Use if-else if-else statements.



// 01:
function checkSign(n) {
    if(n > 0) {
        return "positive"
    }
    else if (n < 0){
        return "negative"
    }

    else{
        return "zero"
    }
}

console.log(checkSign(10));
console.log(checkSign(0));
console.log(checkSign(-10));


// 02: 
function checkSign2(n) {
    return n > 0 ? "positive" : n < 0 ? "negative" : "zero"
}

console.log(checkSign2(40));
console.log(checkSign2(0));
console.log(checkSign2(-40));