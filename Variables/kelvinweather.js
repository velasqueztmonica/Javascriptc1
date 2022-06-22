/*Kelvin Weather
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.
*/

// Kelvin is a constant to transform from x metric to kelvins
const kelvin = 0;

// Converting to Celsius
let celsius;
celsius = kelvin - 273;

// Converting to F
let fahrenheit;
fahrenheit = celsius *(9/5) + 32

let newton;
newton = celsius *(33/100)
// Rounding down
fahrenheit = Math.floor(fahrenheit) 
newton = Math.floor(newton)

// Printing to the console
console.log (`The temperature is ${fahrenheit} degrees Fahrenheit`)
console.log(newton)