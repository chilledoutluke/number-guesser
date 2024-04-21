let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
  };
  
  console.log(generateTarget());
  
  const compareGuesses = (userGuess, computerGuess, targetGuess) => {
    const userDifference = Math.abs(targetGuess - userGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);
  
    if(userGuess <= computerGuess) {
      return true;
    } else {
        return false;
    }
  };
  
  const updateScore = winner => {
    if(winner === 'user') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }
  
  const advanceRound = () => currentRoundNumber++;
