//CONDITIONALS
//Here are some of the major concepts for conditionals:

// An if statement checks a condition and will execute a task if that condition evaluates to true.
// if...else statements make binary decisions and execute different code blocks based on a provided condition.
let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.')
}

// We can add more conditions using else if statements.
// Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.

let hungerLevel = 3;

if (hungerLevel > 7){
  console.log('Time to eat!')
} else {
  console.log('We can eat later!')
}
// The logical and operator, &&, or “and”, checks if both provided expressions are truthy.
// The logical operator ||, or “or”, checks if either provided expression is truthy.
// The bang operator, !, switches the truthiness and falsiness of a value.
let mood = 'sleepy';
let tirednessLevel = 6;

if (!mood === 'sleepy' || tirednessLevel < 4) {
  console.log('time to sleep')
} else {
  console.log('not bed time yet')
}

let stopLight = 'green';
let pedestrians = 1;

if (stopLight === 'green' && pedestrians === 0) {
    console.log('Go!');
  } else {
    console.log('Stop');
}
let day = 'Monday';
if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend!');
  } else {
    console.log('Do some work.');
}
  
// Truthy and Falsy values
//The list of falsy values includes:

//0
//Empty strings like "" or ''
//null which represent when there is no value at all
//undefined which represent when a declared variable lacks a value
//NaN, or Not a Number

let wordCount = 3;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);

// The ternary operator is shorthand to simplify concise if...else statements.
let isLocked = false;

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

isLocked ? console.log('You will need a key to open the door.') : // this is the terniary operator
console.log('You will not need a key to open the door.');

let isCorrect = true;

if (isCorrect) {
    console.log('Correct!');
} else {
    console.log('Incorrect!');
}

// Else...if statements with more options
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log("It's winter! Everything is covered in snow.")
} else if (season === 'fall') {
  console.log("It's fall! Leaves are falling!")
}else if (season === 'summer') {
  console.log("It's sunny and warm because it's summer!")
}


else {
  console.log('Invalid season.');
}
// A switch statement can be used to simplify the process of writing multiple else if statements. The break keyword stops the remaining cases from being checked and executed in a switch statement.

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {

  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}