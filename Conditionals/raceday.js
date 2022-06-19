/*Problem
Codecademy’s annual race is just around the corner! This year, we have a lot of participants. 
You have been hired to write a program that will register runners for the race and give them instructions on race day.
Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.
Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.
*/

//1. Calculating a race number between 0 and 1000


let raceNumber = Math.floor(Math.random() * 1000);

//2. Variable indicating if a runner registered early or not
let registeredEarly = false;
//3. Variable indicating the age of the runner
const runnerAge = 18;

//4. Create a control flow statement that checks whether the runner is an adult AND registered early. Add 1000 to their raceNumber if this is true

if (runnerAge > 18 && registeredEarly === true) {
  raceNumber += 1000
}

console.log(raceNumber);

if (runnerAge > 18 && registeredEarly === true) {
  console.log (`Dear runner, your race number is ${raceNumber} 
  and you will race at 9.30 am`);
} else if (runnerAge > 18 && !registeredEarly === true) {
  console.log (`Dear runner, your race number is ${raceNumber} 
  and you will race at 11.00 am`);
} else if (runnerAge < 18) {
  console.log (`Dear runner, your race number is ${raceNumber} 
  and you will race at 12.30 pm`);
} else {
  console.log('Please go to the registration desk')
}

