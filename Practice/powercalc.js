/* Power Calculator
Create a function that takes voltage and current and returns the calculated power.
*/


function circuitPower(voltage, current) {
    return voltage * current;
}
console.log(circuitPower(3,10))

//ES6 Functions

const circuitPower = (voltage, current) => {
    return voltage * current
}

console.log(circuitPower(3,10))