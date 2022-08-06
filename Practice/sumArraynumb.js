/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.


*/

// possible to do it all in sequence without declaring another variable

const sumArray = array => {


        //Re-ordering the array from lowest to highest

        const newArray = array.sort(function (a, b) { return a - b })
        //Pop out the highest and lowest number using the index
        newArray.shift()
        newArray.pop()

        //Using the reduce function in the new array
    
        return newArray.reduce((accumulator, number) => {
            return number + accumulator;
        }, 0);

        //Return the array

        return newArray;
        console.log(typeof newArray);
    
    }


//Testing

const a = (sumArray([5, 7, 1, 4, 8, 10, 3]))
console.log(a)
console.log(typeof a)