/*A function is a reusable block of code that groups together a sequence of statements to perform a specific task.
A function declaration :

Diagram showing the syntax of a function declaration
A parameter is a named variable inside a function’s block which will be assigned the value of the argument passed in when the function is invoked:

JavaScript syntax for declaring a function with parameters
To call a function in your code:

Diagram showing the syntax of invoking a function
ES6 introduces new ways of handling arbitrary parameters through default parameters which allow us to assign a default value to a parameter in case no argument is passed into the function.
To return a value from a function, we use a return statement.
To define a function using function expressions:

defining a function expression
To define a function using arrow function notation:


Function definition can be made concise using concise arrow notation:

comparing single line and multiline arrow functions
*/

//1. Function Declaration
function getReminder () {
    console.log ('Water the plants.')
  }
  
  function greetInSpanish () {
    console.log ('Buenas Tardes.')
  }

  //2. Parameters and Arguments
  function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + 
    '! We appreciate your business.');
  }
  
sayThanks('Cole') // calling the function parsing the argument
  
//3. Default Parameters
//Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.

function makeShoppingList(item1 = 'milk', 
    item2 = 'bread', item3 = 'eggs')
{
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

makeShoppingList(item1 = 'soya milk', item2 = 'bread', item3 = 'eggs')

function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
  }
   
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!
  
//4. Return: o pass back information from the function call, we use a return statement. 
//To create a return statement, we use the return keyword followed by the value that we wish to return. 

function monitorCount (rows, columns) {
    return rows * columns
  }
  
  const numOfMonitors = monitorCount (5,4)

console.log(numOfMonitors)
  
function rectangleArea(width, height) {
    if (width < 0 || height < 0) {
      return 'You need positive integers to calculate area!';
    }
    return width * height;
}
  
//5. Helper Functions: We can also use the return value of a function inside another function. 
//These functions being called within another function are often referred to as helper functions. 
//Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.

function monitorCount(rows, columns) {
    return rows * columns;
  }
  
function costOfMonitors (rows,columns) {
    return monitorCount(rows,columns) * 200
  }

const totalCost = costOfMonitors(5, 4)
console.log(totalCost)

//6. Function Expressions: Another way to define a function is to use a function expression. 
//To define a function inside an expression, we can use the function keyword. In a function expression, the function name is usually omitted. 
//A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.

const plantNeedsWater = function(day) { //this is the function name

    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
  
console.log(plantNeedsWater('Tuesday'))
  
//7. Arrow Functions: remove the need to type out the keyword function everytime you need to create a function

const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
}
  
const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
};
  
//8. Concise Body Arrow Functions
//From this const squareNum = (num) => {
//return num * num;
//};

const squareNum = num => num * num;