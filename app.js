function getComputerChoice() {
    const computerChoice = Math.random();
    if(computerChoice <= 0.33){
        return "rock";
    }else if(computerChoice <= 0.66){
        return "paper";
    } else if(computerChoice <= 1){
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){

    if(playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats Rock";
    } else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "You Lose! Scissors beats Paper";
    } else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "You Lose! Rock beats Scissors";
    } else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "You Win! Rock beats Scissors";
    } else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You Win! Paper beats Rock";
    } else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper" || 
    playerSelection === "scissors" && computerSelection === "scissors") {
        return "Tie!";
    } else {
    return "Incorrect Input! Try again!";
    }
}

function game(){
    for(let i = 0; i < 5; i++){
         playRound();   
    }
}

let playerSelection = prompt("Enter your choice!");
playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
console.log(game());