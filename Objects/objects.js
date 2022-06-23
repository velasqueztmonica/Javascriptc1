/*Objects
We use curly braces, {}, to designate an object literal:
We fill an object with unordered data. This data is organized into key-value pairs. 
A key is like a variable name that points to a location in memory that holds a value.
*/

// Write your fasterShip object literal below

let fasterShip = {
    color: 'silver',
    'Fuel Type': 'Turbo Fuel'
};
  
/*Accessing Properties
With property dot notation, we write the object’s name, followed by the dot operator and then the property name (key)
If we try to access a property that does not exist on that object, undefined will be returned.
*/
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  
const crewCount = spaceship.numCrew;
const planetArray = spaceship.flightPath;
  
console.log(crewCount)

//To use bracket notation to access an object’s property, we pass in the property name (key) as a string.
let spaceship2 = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  // Write your code below
  
  const isActive = spaceship2['Active Mission']
  console.log(spaceship2 ['Active Mission'])