/*
mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

*/

const basicOp = (operation, value1, value2) => {
    
    switch (operation) {

        case '+':
          return value1 + value2;
          break;
        case '-':
            return value1 - value2;
          break;
        case '*':
            return value1 * value2;
          break;
        default:
          return value1 / value2;
          break;
      }
}

console.log(basicOp('+', 4, 7))