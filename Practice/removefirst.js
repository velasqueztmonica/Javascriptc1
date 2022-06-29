// It's pretty straightforward. 
// Your goal is to create a function that removes the first and last characters of a string.You're given one parameter, 
// the original string.You don't have to worry with strings with less than two characters.


function removeFirst(string) {
    let arraySentence = string.split('')
    arraySentence.shift();
    arraySentence.pop();
    finalS = arraySentence.join('')
    return finalS;
}

//Testing
console.log(removeFirst('Hi Monica How is everything'))

//Another method for a 1 line code
function removeChar(str) {
    return str.slice(1, -1);
  }