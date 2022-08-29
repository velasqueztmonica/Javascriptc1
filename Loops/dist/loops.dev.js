"use strict";

// Loops perform repetitive actions so we don’t have to code that process manually every time.  
// How to write for loops with an iterator variable that increments or decrements
for (var counter = 5; counter < 11; counter++) {
  console.log(counter);
}

for (var _counter = 3; _counter >= 0; _counter--) {
  console.log(_counter);
} // How to use a for loop to iterate through an array


var vacationSpots = ['Bali', 'Paris', 'Tulum']; // Write your code below

for (var i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
} // A nested for loop is a loop inside another loop
// Write your code below


var bobsFollowers = ['m', 'n', 'd', 'j'];
var tinasFollowers = ['a', 'n', 'd']; // Creating an empty array

var mutualFollowers = [];

for (var _i = 0; _i < bobsFollowers.length; _i++) {
  // iterate through the rows
  for (var j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[_i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[_i]);
    }
  }
}

; // while loops allow for different types of stopping conditions
// Stopping conditions are crucial for avoiding infinite loops.

var cards = ['diamond', 'spade', 'heart', 'club'];
var currentCard;

while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
} // do...while loops run code at least once— only checking the stopping condition after the first execution


var cupsOfSugarNeeded = 5;
var cupsAdded = 0;

do {
  cupsAdded++;
  console.log(cupsAdded + ' cup was added');
} while (cupsAdded < cupsOfSugarNeeded); // The break keyword allows programs to leave a loop during the execution of its block


var rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (var _i2 = 0; _i2 < rapperArray.length; _i2++) {
  console.log(rapperArray[_i2]);

  if (rapperArray[_i2] === 'Notorious B.I.G.') {
    break;
  }
}

console.log("And if you don't know, now you know.");

function multiplyAll(arr) {
  var product = 1; // Only change code below this line

  for (var _i3 = 0; _i3 < arr.length; _i3++) {
    //iterate through the rows
    //console.log(arr[i])
    for (var _j = 0; _j < arr[_i3].length; _j++) {
      //arr[i] to identify the length of the row
      console.log(arr[_i3][_j]);
      console.log('----');
      console.log(product *= arr[_i3][_j]);
    } //

  } // Only change code above this line


  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);