function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 10) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));
  
// Arrow function will be

const greaterThanTen2 = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};
console.log(greaterThanTen2([2, 12, 8, 14, 80, 0, 1]));

/* Exercise
We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. 
elem represents an element that may or may not be present on one or more of the arrays nested within arr. 
Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.
*/


function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[j] == elem) {
                newArr.splice(arr[i]);
            }
        }
    }
    // Only change code above this line
    return newArr;
  }
  
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)) //should return [[10, 8, 3], [14, 6, 23]])