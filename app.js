let playerSelection;
const computerSelection = getComputerChoice();
let counterPointsPlayer = 0;
let counterPointsComputer = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else if (randomNumber === 3) {
    return "scissors";
  }
}

function play(playerSelection, computerSelection) {
  let counterRounds = 1;

  while (counterRounds <= 5) {
    playerSelection = prompt("Enter Your Choice:").toLowerCase();
    computerSelection = getComputerChoice();

    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
      if (playerSelection === "rock" && computerSelection === "paper") {
        counterPointsComputer++;
        console.log(`You Lose! Paper beats Rock!
The current result is ${counterPointsPlayer}:${counterPointsComputer}`);
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
        counterPointsComputer++;
        console.log(`You Lose! Scissors beats Paper!
The current result is ${counterPointsPlayer}:${counterPointsComputer}`);
      } else if (playerSelection === "scissors" && computerSelection === "rock") {
        counterPointsComputer++;
        console.log(`You Lose! Rock beats Scissors!
The current result is ${counterPointsPlayer}:${counterPointsComputer}`);
      } else if (playerSelection === "rock" && computerSelection === "scissors") {
        counterPointsPlayer++;
        console.log(`You Win! Rock beats Scissors!
The current result is ${counterPointsPlayer}:${counterPointsComputer}`);
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        counterPointsPlayer++;
        console.log(`You Win! Paper beats Rock!
The current result is ${counterPointsPlayer}:${counterPointsComputer}`);
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
        counterPointsPlayer++;
        console.log(`You Win! Scissors beats Paper!
The current result is ${counterPointsPlayer}:${counterPointsComputer}`);
      } else if (playerSelection === computerSelection) {
        console.log(`It's a Tie! No one gets a point!
The current result is ${counterPointsPlayer}:${counterPointsComputer}`);
      }
      counterRounds++;
    } else {
      console.log(checkInvalidInput());
    }
  }
  console.log(declareWinner());
}

function checkInvalidInput() {
  if (playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors") {
    console.log("Invalid Input! Try Again!");
  }
}

function declareWinner() {
  if (counterPointsPlayer > counterPointsComputer) {
    console.log("Congratulations! You Won the game!!!");
  } else if (counterPointsComputer > counterPointsPlayer) {
    console.log("Unfortunately, You Lost the game! :(");
  } else {
    console.log("The game ends in a draw!");
  }
  console.log(`The final result is: ${counterPointsPlayer}:${counterPointsComputer}!`);
}

console.log(play());
