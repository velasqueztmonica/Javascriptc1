// Convert Hours into Seconds
// Write a function that converts hours into seconds.

function hourstosec(hours) {
    let hourtm = 60; //An hour is 60 minutes
    let minuteS = 60; //A minute has 60 seconds
    return hours * hourtm * minuteS;
}

console.log(hourstosec(1))

// ES6
const hourstosec = (hours) => {
    let hourtm = 60; //An hour is 60 minutes
    let minuteS = 60; //A minute has 60 seconds
    return hours * hourtm * minuteS;
}
console.log(hourstosec(1))