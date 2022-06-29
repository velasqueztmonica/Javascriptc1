// Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition2(num) {
    let a = num
    a++
    return a
}

console.log(addition2(2))

// ES6
const addition1 = (num) => {
    let a = num;
    a++;
    return a;
}

console.log(addition1(2))