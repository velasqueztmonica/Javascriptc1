"use strict";

// Iterator - .forEach iterates through the array
// returns undefined
var fruits = ['mango', 'papaya', 'pineapple', 'apple']; // Iterate over fruits below and log the I want to eat + the fruit name

fruits.forEach(function (fruitItem) {
  return console.log('I want to eat a ' + fruitItem);
}); // Iterator .map -- iterates through the array and creates a new one

var animals1 = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog']; // Create the secretMessage array below

var secretMessage = animals1.map(function (animal) {
  return animal[0]; //returns the character in position 0
});
console.log(secretMessage.join('')); //use the method .join to join the characters of all elements of the array in position 0

var bigNumbers = [100, 200, 300, 400, 500]; // Create the smallNumbers array below

var smallNumbers1 = bigNumbers.map(function (number) {
  return number / 100;
});
console.log(smallNumbers1); // Iterator .filter returns an array of elements after filtering out certain elements from the original array
//return true or false depending on the element that is passed to it. 
//The elements that cause the callback function to return true are added to the new array. 

var randomNumbers = [375, 200, 3.14, 7, 13, 852]; // Call .filter() on randomNumbers below

var smallNumbers = randomNumbers.filter(function (number) {
  return number < 250;
});
console.log(smallNumbers);
var favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene']; // Call .filter() on favoriteWords below

var longFavoriteWords = favoriteWords.filter(function (word) {
  return word.length > 7;
});
console.log(longFavoriteWords); //  .findIndex n an array will return the index of the first element that evaluates to true in the callback function.
// if it does not find a match, it will return a -1

var animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
var foundAnimal = animals.findIndex(function (animal) {
  return animal === 'elephant';
});
console.log(foundAnimal);
var startsWithS = animals.findIndex(function (animal) {
  return animal[0] === 's';
});
console.log(startsWithS); //.reduce method returns a single value after iterating through the elements of an array, thereby reducing the array.

var newNumbers = [1, 3, 5, 7]; //traditional function syntax const reduceExample = sampleArr.reduce(function(accumulator, currentValue) {
//});
//accumulator, if not specified then value of position 0 of array
//currentValue if not specified then value of position 1 of array

var newSum = newNumbers.reduce(function (accumulator, currentValue) {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10); //second argument of the method as the initial value of the accumulator

console.log(newSum);
var words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise']; // Something is missing in the method call below
//The some() method tests whether at least one element in the array passes the test implemented by the provided function

console.log(words.some(function (word) {
  return word.length < 6;
})); // Use filter to create a new array

var interestingWords = words.filter(function (word) {
  return word.length > 5;
}); // Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every(function (word) {
  return word.length > 5;
}));