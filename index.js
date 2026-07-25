@@ -1,16 +1,4 @@
// Temperature Converter using map()

const celsius = [0, 20, 30, 40];

// TODO:
// Convert the Celsius temperatures to Fahrenheit
// Formula: (C × 9/5) + 32
// Use the map() function and store the result in fahrenheit.

let fahrenheit = [];

// Write your code below


// Do not modify this line
module.exports = fahrenheit;
let fahrenheit = celsius.map(temp=>(temp*9/5)+32);
console.log(fahrenheit)
module.exports = fahrenheit;
