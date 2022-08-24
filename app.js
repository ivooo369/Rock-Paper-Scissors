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
  let roundPlayerWinner = false;
  let roundComputerWinner = false;
  let gamePlayerWinner = false;
  let gameComputerWinner = false;

  let tie = false;

  // Add event listeners for all three buttons
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playerSelection = button.className;
      const computerSelection = getComputerChoice();
      battleWinText.textContent = playRound(playerSelection, computerSelection);
      playerWinText.textContent = "Player Score: " + counterPointsPlayer;
      computerWinText.textContent = "Computer Score: " + counterPointsComputer;
      endGame();
    });
  });

  // play the round and determine winner
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
      if (playerSelection === computerSelection) {
        tie = true;
        roundPlayerWinner = false;
        roundComputerWinner = false;
        colorRoundWinner();
        return `It's a Tie! Your choice is ${playerSelection} and the computer's choice is ${computerSelection}.`;
      } else if (playerSelection === "rock" && computerSelection === "paper") {
        counterPointsComputer++;
        roundComputerWinner = true;
        roundPlayerWinner = false;
        tie = false;
        colorRoundWinner();
        return `You Lose! Your choice is ${playerSelection} and the computer's choice is ${computerSelection}.`;
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
        counterPointsComputer++;
        roundComputerWinner = true;
        roundPlayerWinner = false;
        tie = false;
        colorRoundWinner();
        return `You Lose! Your choice is ${playerSelection} and the computer's choice is ${computerSelection}.`;
      } else if (playerSelection === "scissors" && computerSelection === "rock") {
        counterPointsComputer++;
        roundComputerWinner = true;
        roundPlayerWinner = false;
        tie = false;
        colorRoundWinner();
        return `You Lose! Your choice is ${playerSelection} and the computer's choice is ${computerSelection}.`;
      } else if (playerSelection === "rock" && computerSelection === "scissors") {
        counterPointsPlayer++;
        roundPlayerWinner = true;
        roundComputerWinner = false;
        tie = false;
        colorRoundWinner();
        return `You Win! Your choice is ${playerSelection} and the computer's choice is ${computerSelection}.`;
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        counterPointsPlayer++;
        roundPlayerWinner = true;
        roundComputerWinner = false;
        tie = false;
        colorRoundWinner();
        return `You Win! Your choice is ${playerSelection} and the computer's choice is ${computerSelection}.`;
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
        counterPointsPlayer++;
        roundPlayerWinner = true;
        roundComputerWinner = false;
        tie = false;
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
      colorGameWinner();
      return `Congratulations! You won the game!!! 😎 
${finalResult}`;
    } else {
      colorGameWinner();
      return `Unfortunately, You lost the game! 😟 
${finalResult}`;
    }
  }

  // color the round outcome: player win - green, computer win - red, tie - white
  function colorRoundWinner() {
    if (roundPlayerWinner === true) {
      battleWinText.style.color = "#00ff00";
    } else if (roundComputerWinner === true) {
      battleWinText.style.color = "#ff0000";
    } else {
      battleWinText.style.color = "#ffffff";
    }
  }

  // color the game outcome: player win - green, computer win - red
  function colorGameWinner() {
    if (gamePlayerWinner === true) {
      popup.style.color = "#00ff00";
    } else if (gameComputerWinner === true) {
      popup.style.color = "#ff0000";
    }
  }

  // create div DOM for all results
  const resultsDiv = document.createElement("div");
  resultsDiv.classList.add("results");
  resultsDiv.style.marginTop = "30px";
  container.appendChild(resultsDiv);

  // create player win tracking DOM
  const playerWinText = document.createElement("span");
  playerWinText.style.color = "#00ff00";
  playerWinText.textContent = "Player Score: " + counterPointsPlayer;
  resultsDiv.appendChild(playerWinText);

  // create computer win tracking DOM
  const computerWinText = document.createElement("span");
  computerWinText.style.color = "#ff0000";
  computerWinText.textContent = "Computer Score: " + counterPointsComputer;
  resultsDiv.appendChild(computerWinText);

  // create battle win text DOM
  const battleWinText = document.createElement("p");
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
      gamePlayerWinner = true;
      gameWinner = declareWinner();
      popup.innerText = gameWinner;
      openPopup();
      disableGameButtons();
      createPlayAgainButton();
    } else if (counterPointsComputer === 5) {
      gameComputerWinner = true;
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
    enableGameButtons();
    battleWinText.textContent = "";
    playerWinText.textContent = `Player Score: ${counterPointsPlayer}`;
    computerWinText.textContent = `Computer Score: ${counterPointsComputer}`;
    popup.classList.remove("open-poup");
    overlay.classList.remove("active");
  }
}

//  function call to start the game
game();
