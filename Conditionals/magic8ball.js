//Problem
//In this project we will build a Magic Eight Ball using control flow in JavaScript.
//The user will be able to input a question, then our program will output a random fortune.

//1. Declaring the username
let userName = '';

//2. Saying hello to user
userName ? console.log(`Hello, ${userName}!`) : 
console.log ('Hello!')

//3. Fix questions
const userQuestion = 'Will I ever get married?'

console.log(userQuestion);

//4. Calculating a random number between 0 an 8. 
let randomNumber = Math.floor(Math.random() * 8)

//5. Logging the number into the console
console.log(randomNumber);

//6. Switch case which will log the answer depending on the number calculated
let eightBall = '';

switch (randomNumber) {
  case 0:
    
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidely so';
    break;
  case 2:
    ceightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot preditc now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}
console.log(eightBall)
