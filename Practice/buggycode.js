// Buggy Code - swap two numbers

function swapNumbers(a, b) {
    array = [a, b]
    temp = array[0]
    array[0] = array[1]
    array[1] = temp

    return array;
}

let a = swapNumbers(4, 5);
console.log(a)