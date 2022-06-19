// Step 1

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
  
  console.log (determineWinner ('rock', 'scissors'))
  console.log (determineWinner ('paper', 'scissors'))
  console.log (determineWinner ('rock', 'rock'))
  
  const playGame = () => {
    let userChoice = getUserChoice ('bomb');
    let computerChoice = getComputerChoice ();
    console.log ('You threw: ' + userChoice, 'The computer threw: ' +computerChoice)
    console.log (determineWinner (userChoice, computerChoice));
  }
  
  playGame()