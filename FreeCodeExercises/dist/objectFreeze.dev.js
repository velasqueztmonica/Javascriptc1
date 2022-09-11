"use strict";

//In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. 
//You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.
var freezeObject = function freezeObject() {
  var MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }

  return MATH_CONSTANTS.PI;
};

var PI = freezeObject();