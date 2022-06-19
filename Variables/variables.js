//Variables

//Variables hold reusable data in a program and associate it with a name.
//Variables are stored in memory.

var favoriteFood = 'pizza';
var numOfSlices = 8;

console.log(favoriteFood)
console.log(numOfSlices)

//The var keyword is used in pre-ES6 versions of JS.
//let is the preferred way to declare a variable when it can be reassigned, and const is the preferred way to declare a variable with a constant value.

let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

let changeMe = true;
changeMe = false;
console.log(changeMe)

//Variables that have not been initialized store the primitive data type undefined.
let ageMonica

// A const variable cannot be reassigned because it is constant

const entree = 'Enchiladas';
console.log(entree)
//entree = 'Tacos' this will through an exception as a variable declared as const cannot be changed

//Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.
//The + operator is used to concatenate strings including string values held in variables.
//In ES6, template literals use backticks ` and ${} to interpolate values into a string.
//The typeof keyword returns the data type (as a string) of a value.