// Problem 4: Celsius to Fahrenheit  [Easy] 
// Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit. 
// Example: 
// Input: 0   → Output: 32
// Input: 100 → Output: 212 
// Hint: Formula: (C × 9/5) + 32


// 01:
function toFahrenheit(celsius){
    return (celsius * 9/5) + 32
}

console.log(toFahrenheit(0));
console.log(toFahrenheit(100));


// 02: 
function toFahrenheit1(celsius){
    let fahrenheit = ((celsius * 9/5) + 32).toFixed(2)
    return fahrenheit
}

console.log(toFahrenheit1(120));
console.log(toFahrenheit1(234));