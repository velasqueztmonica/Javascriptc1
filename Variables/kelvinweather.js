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
// Rounding
fahrenheit = Math.floor(fahrenheit)
newton = Math.floor(newton)

// Printing to the console
console.log (`The temperature is ${fahrenheit} degrees Fahrenheit`)
console.log(newton)