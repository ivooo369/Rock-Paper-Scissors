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
  let playerWinner = false;
  let computerWinner = false;
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
        playerWinner = false;
        computerWinner = false;
        colorWinner();
        return `It's a Tie! Your choice is ${playerSelection} and the computer's choice is ${computerSelection}.`;
      } else if (playerSelection === "rock" && computerSelection === "paper") {
        counterPointsComputer++;
        computerWinner = true;
        playerWinner = false;
        tie = false;
        colorWinner();
        return `You Lose! Your choice is ${playerSelection} and the computer's choice is ${computerSelection}.`;
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
        counterPointsComputer++;
        computerWinner = true;
        playerWinner = false;
        tie = false;
        colorWinner();
        return `You Lose! Your choice is ${playerSelection} and the computer's choice is ${computerSelection}.`;
      } else if (playerSelection === "scissors" && computerSelection === "rock") {
        counterPointsComputer++;
        computerWinner = true;
        playerWinner = false;
        tie = false;
        colorWinner();
        return `You Lose! Your choice is ${playerSelection} and the computer's choice is ${computerSelection}.`;
      } else if (playerSelection === "rock" && computerSelection === "scissors") {
        counterPointsPlayer++;
        playerWinner = true;
        computerWinner = false;
        tie = false;
        colorWinner();
        return `You Win! Your choice is ${playerSelection} and the computer's choice is ${computerSelection}.`;
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        counterPointsPlayer++;
        playerWinner = true;
        computerWinner = false;
        tie = false;
        colorWinner();
        return `You Win! Your choice is ${playerSelection} and the computer's choice is ${computerSelection}.`;
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
        counterPointsPlayer++;
        playerWinner = true;
        computerWinner = false;
        tie = false;
        colorWinner();
        return `You Win! Your choice is ${playerSelection} and the computer's choice is ${computerSelection}.`;
      }
      return declareWinner();
    }
  }

  function declareWinner() {
    let finalResult = `The final result is: ${counterPointsPlayer}:${counterPointsComputer}!`;

    if (counterPointsPlayer > counterPointsComputer) {
      return `Congratulations! You won the game!!! 😎 
${finalResult}`;
    } else {
      return `Unfortunately, You lost the game! 😟 
${finalResult}`;
    }
  }

  // create div DOM for all results
  const container = document.querySelector("#container");
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
  battleWinText.style.color = "red";
  resultsDiv.appendChild(battleWinText);

  // create popup window
  const popup = document.createElement("div");
  popup.style.color = "#ffd700";
  popup.classList.add("popup");
  popup.setAttribute("id", "popup");
  container.appendChild(popup);
  popup.getElementById("popup");

  // create game win text DOM
  const gameWinText = document.createElement("p");
  gameWinText.innerText = gameWinner;
  popup.appendChild(gameWinText);

  function colorWinner() {
    if (playerWinner === true) {
      battleWinText.style.color = "#00ff00";
    } else if (computerWinner === true) {
      battleWinText.style.color = "#ff0000";
    } else {
      battleWinText.style.color = "#ffffff";
    }
  }

  function openPopup() {
    popup.classList.add("open-popup");
  }

  function closePopup() {
    popup.classList.remove("open-popup");
  }

  // determine who won to five points first
  function endGame() {
    if (counterPointsPlayer === 5) {
      gameWinner = declareWinner();
      popup.innerText = gameWinner;
      openPopup();

      // disable game buttons
      document.getElementById("1").disabled = true;
      document.getElementById("1").style.pointerEvents = "none";
      document.getElementById("2").disabled = true;
      document.getElementById("2").style.pointerEvents = "none";
      document.getElementById("3").disabled = true;
      document.getElementById("3").style.pointerEvents = "none";

      // create new DOM button to replay
      const playAgainButton = document.createElement("button");
      playAgainButton.textContent = "Play Again!";
      popup.appendChild(playAgainButton);

      // if clicked, reload page
      playAgainButton.addEventListener("click", () => {
        location.reload();
      });
    } else if (counterPointsComputer === 5) {
      gameWinner = declareWinner();
      popup.innerText = gameWinner;
      openPopup();

      // disable game buttons
      document.getElementById("1").disabled = true;
      document.getElementById("1").style.pointerEvents = "none";
      document.getElementById("2").disabled = true;
      document.getElementById("2").style.pointerEvents = "none";
      document.getElementById("3").disabled = true;
      document.getElementById("3").style.pointerEvents = "none";

      // create new DOM button to replay
      const playAgainButton = document.createElement("button");
      playAgainButton.textContent = "Play Again!";
      popup.appendChild(playAgainButton);

      // if clicked, reload the page
      playAgainButton.addEventListener("click", () => {
        location.reload();
      });
    }
  }
}

//  function call to start the game
game();
