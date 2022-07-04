// Write a function that takes an array of numbers and returns the sum of the numbers. 
// The numbers can be negative or non - integer.If the array does not contain any numbers then you should return 0.

function returnSum(array) {
    let total = 0;
    for (let number of array) {
        total += number
    }
    return total;
}


console.log(returnSum([1, 2, 3]))

//Another way of doing it

const sumArrays = (array) => {
    return array.reduce((accumulator, number) => {
        return number + accumulator;
    },0)
}

console.log(sumArrays([1,2,3]))