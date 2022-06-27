// Is the Number Less than or Equal to Zero?
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, 
//otherwise return false.

function lessEqualZero(number) {
    if (number < 0 || number === 0) {
        return true
    }
    else {
        return false
    }
}

console.log(lessEqualZero(0))

//ES6

const lessEqualZero2 = (number) => {
    (number < 0 || number === 0) ? true : false;
}

console.log(lessEqualZero2(0))