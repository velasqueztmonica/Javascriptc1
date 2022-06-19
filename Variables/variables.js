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

// a. Mathematical Operators

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp +=5 // written as levelUp = levelUp + 5
powerLevel -= 100
multiplyMe *=11
quarterMe /= 4

// b. Increment and Decrement
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar ++; // increment by one, that said output is 4
lostDollar --;
console.log (gainedDollar)
console.log (lostDollar)


// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

//The + operator is used to concatenate strings including string values held in variables.

let favoriteAnimal = 'Tiger';
console.log('My favorite animal: ' + favoriteAnimal)

//In ES6, template literals use backticks ` and ${} to interpolate values into a string.

let myName = 'Monica'
let myCity = 'London'

console.log(`My name is ${myName}. My favorite city is ${myCity}`) // ${variable name}

//The typeof keyword returns the data type (as a string) of a value.

let newVariable = 'Playing around with typeof.';

console.log (typeof newVariable)
newVariable = 1
console.log (typeof newVariable)