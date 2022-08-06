/* celsius-to-fahrenheit.js */
const { celsiusToFahrenheit } = require('./converters.js'); //destructuring
 
const celsiusInput = process.argv[2]; // assgined the 3rd element of the array provided
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);
 
console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);