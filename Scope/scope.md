
Scope refers to where variables can be accessed throughout the program, and is determined by where and how they are declared.

1. Blocks are statements that exist within curly braces {}.

const city = 'New York City'

function logCitySkyline () {
  let skyscraper = 'Empire State Building'
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline())


2. Global scope refers to the context within which variables are accessible to every part of the program.
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

function callMyNightSky () {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log (callMyNightSky())

Global variables are variables that exist within global scope.

Block scope refers to the context within which variables are accessible only within the block they are defined.

Local variables are variables that exist within block scope.

Global namespace is the space in our code that contains globally scoped information.

Scope pollution is when too many variables exist in a namespace or variable names are reused.