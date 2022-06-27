// Area of Triangle
// Write a function that takes the base and height of a triangle and return its area.

function areatriangle(base, height) {
    return (base * height) / 2
}
console.log(areatriangle(3,2))

// ES6 Function format

areatriangle = (base, height) => {
    return (base * height) / 2
}

console.log(areatriangle(3,2))