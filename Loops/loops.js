// Loops perform repetitive actions so we don’t have to code that process manually every time.  
// How to write for loops with an iterator variable that increments or decrements
for (let counter = 5; counter < 11; counter++) {
    console.log(counter)
}
  
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  }
// How to use a for loop to iterate through an array
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below

for (let i = 0 ; i < vacationSpots.length; i++) {
  console.log ( 'I would love to visit ' + vacationSpots[i])
}
// A nested for loop is a loop inside another loop
// Write your code below

const bobsFollowers = ['m', 'n', 'd', 'j'];
const tinasFollowers = ['a', 'n', 'd'];

// Creating an empty array
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j<tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i])
    }
  }
};

// while loops allow for different types of stopping conditions
// Stopping conditions are crucial for avoiding infinite loops.
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

while (currentCard!= 'spade') {
  currentCard = cards[Math.floor(Math.random () *4)]
  console.log(currentCard)
}

// do...while loops run code at least once— only checking the stopping condition after the first execution
let cupsOfSugarNeeded = 5;
let cupsAdded = 0; 

do {
  cupsAdded++; 
  console.log(cupsAdded + ' cup was added')
} while (cupsAdded < cupsOfSugarNeeded);

// The break keyword allows programs to leave a loop during the execution of its block

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");

