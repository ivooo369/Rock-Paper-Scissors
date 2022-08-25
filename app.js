// random generator
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

// game start
function game() {
  let counterPointsPlayer = 0;
  let counterPointsComputer = 0;
  let gameWinner = "";
  let isPlayerRoundWinner = false;
  let isComputerRoundWinner = false;
  let isPlayerGameWinner = false;
  let isComputerGameWinner = false;
  let isTie = false;

  // Add event listeners for all three buttons
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playerSelection = button.className;
      const computerSelection = getComputerChoice();
      battleWinText.textContent = playRound(playerSelection, computerSelection);
      playerScore.textContent = "Player Score: " + counterPointsPlayer;
      computerScore.textContent = "Computer Score: " + counterPointsComputer;
      endGame();
    });
  });

  // play the round and determine winner
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
      if (playerSelection === computerSelection) {
        isTie = true;
        isPlayerRoundWinner = false;
        isComputerRoundWinner = false;
        colorRoundWinner();
        return `It's a Tie! Your choice is ${playerSelection} and the computer's choice is ${computerSelection}.`;
      } else if (playerSelection === "rock" && computerSelection === "paper") {
        counterPointsComputer++;
        isComputerRoundWinner = true;
        isPlayerRoundWinner = false;
        isTie = false;
        colorRoundWinner();
        return `You Lose! Your choice is ${playerSelection} and the computer's choice is ${computerSelection}.`;
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
        counterPointsComputer++;
        isComputerRoundWinner = true;
        isPlayerRoundWinner = false;
        isTie = false;
        colorRoundWinner();
        return `You Lose! Your choice is ${playerSelection} and the computer's choice is ${computerSelection}.`;
      } else if (playerSelection === "scissors" && computerSelection === "rock") {
        counterPointsComputer++;
        isComputerRoundWinner = true;
        isPlayerRoundWinner = false;
        isTie = false;
        colorRoundWinner();
        return `You Lose! Your choice is ${playerSelection} and the computer's choice is ${computerSelection}.`;
      } else if (playerSelection === "rock" && computerSelection === "scissors") {
        counterPointsPlayer++;
        isPlayerRoundWinner = true;
        isComputerRoundWinner = false;
        isTie = false;
        colorRoundWinner();
        return `You Win! Your choice is ${playerSelection} and the computer's choice is ${computerSelection}.`;
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        counterPointsPlayer++;
        isPlayerRoundWinner = true;
        isComputerRoundWinner = false;
        isTie = false;
        colorRoundWinner();
        return `You Win! Your choice is ${playerSelection} and the computer's choice is ${computerSelection}.`;
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
        counterPointsPlayer++;
        isPlayerRoundWinner = true;
        isComputerRoundWinner = false;
        isTie = false;
        colorRoundWinner();
        return `You Win! Your choice is ${playerSelection} and the computer's choice is ${computerSelection}.`;
      }
      return declareWinner();
    }
  }

  // declare the winner of the game and the final result
  function declareWinner() {
    let finalResult = `The final result is: ${counterPointsPlayer}:${counterPointsComputer}!`;

    if (counterPointsPlayer > counterPointsComputer) {
      isPlayerGameWinner = true;
      colorGameWinner();
      return `Congratulations! You won the game!!! 😎 
${finalResult}`;
    } else {
      isComputerGameWinner = true;
      colorGameWinner();
      return `Unfortunately, You lost the game! 😟 
${finalResult}`;
    }
  }

  // color the round outcome: player win - green, computer win - red, tie - white
  function colorRoundWinner() {
    if (isPlayerRoundWinner) {
      battleWinText.style.color = "#00ff00";
    } else if (isComputerRoundWinner) {
      battleWinText.style.color = "#ff0000";
    } else {
      battleWinText.style.color = "#ffffff";
    }
  }

  // color the game outcome: player win - green, computer win - red
  function colorGameWinner() {
    if (isPlayerGameWinner) {
      popup.style.color = "#00ff00";
    } else if (isComputerGameWinner) {
      popup.style.color = "#ff0000";
    }
  }

  // create div DOM for all results
  const resultsDiv = document.createElement("div");
  resultsDiv.classList.add("results");
  resultsDiv.style.marginTop = "40px";
  container.appendChild(resultsDiv);

  // create player win tracking DOM
  const playerScore = document.createElement("span");
  playerScore.classList.add("span-player-score");
  playerScore.style.color = "#00ff00";
  playerScore.textContent = "Player Score: " + counterPointsPlayer;
  resultsDiv.appendChild(playerScore);

  // create computer win tracking DOM
  const computerScore = document.createElement("span");
  computerScore.classList.add("span-computer-score");
  computerScore.style.color = "#ff0000";
  computerScore.textContent = "Computer Score: " + counterPointsComputer;
  resultsDiv.appendChild(computerScore);

  // create battle win text DOM
  const battleWinText = document.createElement("p");
  battleWinText.classList.add("msg-round");
  battleWinText.style.color = "#ff0000";
  resultsDiv.appendChild(battleWinText);

  // create popup window
  const popup = document.createElement("div");
  popup.classList.add("popup");
  container.appendChild(popup);

  // create overlay div to make the background darker when the popup window is open
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  container.appendChild(overlay);

  // create game win text DOM
  const gameWinText = document.createElement("p");
  gameWinText.innerText = gameWinner;
  popup.appendChild(gameWinText);

  // open popup window
  function openPopup() {
    popup.classList.add("open-popup");
    overlay.classList.add("active");
  }

  // close popup window
  function closePopup() {
    popup.classList.remove("open-popup");
    overlay.classList.remove("active");
  }

  // disable game buttons
  function disableGameButtons() {
    document.getElementById("1").disabled = true;
    document.getElementById("1").style.pointerEvents = "none";
    document.getElementById("2").disabled = true;
    document.getElementById("2").style.pointerEvents = "none";
    document.getElementById("3").disabled = true;
    document.getElementById("3").style.pointerEvents = "none";
  }

  // enable game buttons
  function enableGameButtons() {
    document.getElementById("1").disabled = false;
    document.getElementById("1").style.pointerEvents = "auto";
    document.getElementById("2").disabled = false;
    document.getElementById("2").style.pointerEvents = "auto";
    document.getElementById("3").disabled = false;
    document.getElementById("3").style.pointerEvents = "auto";
  }

  // create a new DOM button to replay
  function createPlayAgainButton() {
    const playAgainButton = document.createElement("button");
    playAgainButton.classList.add("btn-play-again");
    playAgainButton.textContent = "Play Again!";
    popup.appendChild(playAgainButton);

    playAgainButton.addEventListener("click", () => {
      closePopup();
      restartGame();
    });
  }

  // determine who won to five points first
  function endGame() {
    if (counterPointsPlayer === 5) {
      isPlayerGameWinner = true;
      gameWinner = declareWinner();
      popup.innerText = gameWinner;
      openPopup();
      disableGameButtons();
      createPlayAgainButton();
    } else if (counterPointsComputer === 5) {
      isComputerGameWinner = true;
      gameWinner = declareWinner();
      popup.innerText = gameWinner;
      openPopup();
      disableGameButtons();
      createPlayAgainButton();
    }
  }

  function restartGame() {
    counterPointsPlayer = 0;
    counterPointsComputer = 0;
    isPlayerGameWinner = false;
    isComputerGameWinner = false;
    enableGameButtons();
    battleWinText.textContent = "";
    playerScore.textContent = `Player Score: ${counterPointsPlayer}`;
    computerScore.textContent = `Computer Score: ${counterPointsComputer}`;
    popup.classList.remove("open-poup");
    overlay.classList.remove("active");
  }
}

//  function call to start the game
game();
