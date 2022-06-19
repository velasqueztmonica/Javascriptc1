// Arrays are lists that store data in JavaScript.
// Arrays are created with brackets [].
// Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable.
// Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
console.log(newYearsResolutions);

const hobbies = ['Tennis', 'Volleyball', 'Reading']
console.log(hobbies)

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments)

// let condiments = ['Mayo']
// console.log(condiments)
// Cannot re-assign arrays

utensils[3] = 'Spoon'
console.log(utensils)


// Each item inside of an array is at a numbered position, or index, starting at 0.
// We can access one item in an array using its index, with syntax like: myArray[0].

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = famousSayings[0];
console.log(listItem)
console.log(famousSayings[2])
console.log(famousSayings[3])

// We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';
console.log(groceryList)

// Arrays have a length property, which allows you to see how many items are in an array.

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length)
// Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.

//Push: allows us to add items to the end of an array
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push ('iron the clothes', 'vaccumm');
console.log(chores)

//Pop: removes the last item of an array
const chores2 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores2.pop();
console.log(chores2)


// Arrays have many methods that perform different tasks, such as .slice() and .shift(), you can find documentation at the Mozilla Developer Network website.

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift() //method to remove the first item from the array 
console.log(groceryList)

groceryList.unshift('popcorn'); //add the beginning of the grocery list
console.log(groceryList)

console.log(groceryList.slice(1, 4)); // Slice an array start:end
console.log(groceryList)

const pastaIndex = groceryList.indexOf('pasta'); //returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(pastaIndex)


// Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the documentation.
// Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. However, a variable declared with const cannot be reassigned.
// Arrays mutated inside of a function will keep that change even outside the function.

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept)

function removeElement (newArr) {
  newArr.pop ();
}

removeElement(concept)
console.log(concept)

// Arrays can be nested inside other arrays.

// To access elements in nested arrays chain indices using bracket notation.
const numberClusters = [[1,2], [3,4], [5,6]];
const target = numberClusters[2][1];
console.log(target)