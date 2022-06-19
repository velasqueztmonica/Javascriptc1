//Introduction

// 1. Data is printed, or logged, to the console, a panel that displays messages, with console.log().

console.log(31);
console.log(4);

// 2. We can write single-line comments with // and multi-line comments between /* and */
// There are 7 fundamental data types in JavaScript: strings, numbers, booleans, null, undefined, symbol, and object.
//    a. Numbers are any number without quotes: 23.8879
console.log(2011);
console.log(20.49);

//    b. Strings are characters wrapped in single or double quotes: 'Sample String'
console.log('JavaScript');
console.log('Woohoo! I love to code! #codecademy')

console.log('Hello' + 'World') // Concatenating a string
console.log('Hello ' + 'World') // Concatenating a string


//    c. The built-in arithmetic operators include +, -, *, /, and %.

console.log(3.5 + 31)
console.log(2021 - 1969)
console.log(65 / 240)
console.log(0.2708 * 100)
console.log(11 % 3);

//    d. Objects, including instances of data types, can have properties, stored information. The properties are denoted with a . after the name of the object, for example: 'Hello'.length.

console.log('Teaching the world how to code'.length)

//    e. Objects, including instances of data types, can have methods which perform actions. Methods are called by appending the object or instance with a period, the method name, and parentheses. For example: 'hello'.toUpperCase().
//    f. We can access properties and methods by using the ., dot operator.


console.log('Codecademy'.toUpperCase()); // Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('    Remove whitespace   '.trim()); // Use a string method to log the following string without whitespace at the beginning and end of it.

//  g. Built -in objects, including Math, are collections of methods and properties that JavaScript provides.

console.log(Math.floor(Math.random() * 100)); // Prints a random number between 0 and 100, and then rounds down to the nearest whole number
console.log(Math.ceil(43.8)); //returns the smallest integer greater than or equal to a decimal number.
console.log(Number.isInteger(2017)) // checkes if the number is an integer
