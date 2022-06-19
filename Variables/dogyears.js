//Problem

/*Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:
The first two years of a dog’s life count as 10.5 dog years each. Each year following equates to 4 dog years.
*/

//Solution

// 1. Declare variables
let myAge = 22;
let earlyYears = 2;
let laterYears;
let myAgeInDogYears;

//2. multiplyinh by 10.5 as per the assignment

earlyYears *= 10.5
console.log(earlyYears)
laterYears = myAge - 2
console.log(laterYears)

//3. Calculating the number of dog years accounted for by the user's later years
laterYears *= 4;
console.log(laterYears)

//4. Calculating the age in Dog Years
myAgeInDogYears = earlyYears + laterYears
console.log(myAgeInDogYears)

//5. Preparing the output, using string interpolation

let myName;
myName = 'Monica'.toLowerCase()

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} old in dog years`)