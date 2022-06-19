/* Problem Description
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.
*/



// Step 1: Function to log the user input

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase ();
  
    if (userInput === 'rock' || userInput ==='paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log ('This is not a valid entry')
    }
  };
  
  console.log (getUserChoice ('Paper'))
  console.log (getUserChoice ('Fork'))
  
  //Step 2: Generating the computer choice using a switch
  const getComputerChoice = () => {
    randomNumber = Math.floor (Math.random () * 3)
  
    switch (randomNumber) {
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2:
      return 'scissors';
    }
  }
  
  console.log (getComputerChoice())
  
  //3. Main Function to determine who has won
  const determineWinner = (userChoice, computerChoice) => {
  
    if (userChoice === computerChoice) {
      return 'Game is a tie';
    } 
    if (userChoice === 'rock') {
          if (computerChoice === 'paper') {
            return 'Computer Won';
          } else {
            return 'User Won'
          }
        }
  
    if (userChoice === 'paper') {
          if (computerChoice === 'scissors') {
            return 'Computer Won';
          } else {
            return 'User Won'
          }
        }
  
    if (userChoice === 'scissors') {
          if (computerChoice === 'rock') {
            return 'Computer Won';
          } else {
            return 'User Won'
          }
        }
  
    if (userChoice === 'bomb') {
            return 'User Won'
        }
    };
  
//Testing
  console.log (determineWinner ('rock', 'scissors'))
  console.log (determineWinner ('paper', 'scissors'))
  console.log (determineWinner ('rock', 'rock'))
  
// Function Automated 
  const playGame = () => {
    let userChoice = getUserChoice ('bomb'); //calling the function for user input
    let computerChoice = getComputerChoice (); //calling the function for the computer input
    console.log ('You threw: ' + userChoice, 'The computer threw: ' +computerChoice)
    console.log (determineWinner (userChoice, computerChoice));
  }
  
  playGame()