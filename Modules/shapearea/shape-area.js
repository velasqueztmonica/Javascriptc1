/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below
function circleArea(radiusLength) {
    return PI * radiusLength * radiusLength;
}

function squareArea(sideLength) {
    return sideLength * sideLength;
}

// const circleA = radius => PI * radius * radius;

// Exporting functions
module.exports.circleArea = circleArea;
module.exports.squareArea = squareArea;