// Convert Age to Days

function calcAge(Age) {
    yearD = 365;
    return Age * yearD
}

console.log(calcAge(1))


// ES6
const calcAge2 = (age2) => {
    return age2 * 365;
}

console.log(calcAge2(1))