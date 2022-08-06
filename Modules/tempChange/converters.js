/* converters.js */
function celsiusToFahrenheit(celsius) { //declaring the functions
    return celsius * (9/5) + 32; // performing the calculations
  }
   
  module.exports.celsiusToFahrenheit = celsiusToFahrenheit; //asigning to the export 
   
  module.exports.fahrenheitToCelsius = function(fahrenheit) { //assinging to export, and declaring the functions within
    return (fahrenheit - 32) * (5/9);
  };

  // module.exports is an object that is built-in in the node.js runtime environment. 
  // other files can now import the object and make use interchangeably
  // require () is a must to use this module