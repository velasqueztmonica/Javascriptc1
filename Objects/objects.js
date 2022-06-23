// Objects
// Empty object below
// We make a key-value pair by writing the key’s name, or identifier, followed by a colon and then the value. 
// We separate each key - value pair in an object literal with a comma(,).Keys are strings, 
// but when we have a key that does not have any special characters in it, JavaScript allows us to omit the quotation marks:

let spaceship1 = {
    'Fuel Type': 'diesel',
color: 'silver'};

// Example fo Accessing properties
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  // Write your code below
  
const crewCount = spaceship.numCrew;
  console.log(crewCount)
const planetArray = spaceship.flightPath;
  
// We must use bracket notation when accessing keys that have numbers, spaces, 
// or special characters in them.Without bracket notation in these situations, our code would throw an error

let spaceship2 = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  // Write your code below
  
  const isActive = spaceship2['Active Mission']
console.log(spaceship2['Active Mission'])

/*
With bracket notation you can also use a variable inside the brackets to select the keys of an object. 
This can be especially helpful when working with functions:*/
let returnAnyProp = (objectName, propName) => objectName[propName];
 
returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

/*Objects are mutable meaning we can update them after we create them!

We can use either dot notation, ., or bracket notation, [], and the assignment operator, 
= to add new key-value pairs to an object or change an existing property.
*/
let spaceship3 = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship3.color = 'glorious gold';
spaceship3.numEngines = Math.floor(Math.random() * 10);

// delete objectName['Property Name']; this is to be used when there is a string
// delete objectName.propName;
delete spaceship3['Secret Mission'] //removes the mission property
console.log(spaceship3)

// Creating Methods
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat () {
    console.log(retreatMessage)
  },

  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}

alienShip.retreat();
alienShip.takeOff();