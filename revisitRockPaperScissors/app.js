let humanScore = 0;
let computerScore = 0;
document.querySelector(
  "#results"
).textContent = `You: ${humanScore} - Computer: ${computerScore}`;

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) return "rock";
  else if (randomNum === 1) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  const input = prompt("Rock, Paper, or Scissors?");
  return input;
}

//reset Game after certain points
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  document.querySelector(
    "#results"
  ).textContent = `You: ${humanScore} - Computer: ${computerScore}`;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    document.querySelector(
      "#whoWin"
    ).innerHTML = `You chose ${humanChoice}, the computer chose ${computerChoice}, <br>It's a tie!`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;

    document.querySelector(
      "#whoWin"
    ).innerHTML = `You chose ${humanChoice}, the computer chose ${computerChoice}, <br>You win!`;
  } else {
    computerScore++;
    document.querySelector(
      "#whoWin"
    ).innerHTML = `You chose ${humanChoice}, the computer chose ${computerChoice}, <br>You lose!`;
  }

  document.querySelector(
    "#results"
  ).textContent = `You: ${humanScore} - Computer: ${computerScore}`;

  //Final result
  if (humanScore === 5) {
    setTimeout(() => {
      alert("🎉 You win it all!");
      resetGame();
    }, 50); // 50 milliseconds delay
  } else if (computerScore === 5) {
    setTimeout(() => {
      alert("💻 Computer wins the game!");
      resetGame();
    }, 50);
  }
}

document.querySelector("#rock").addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
document.querySelector("#paper").addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
document.querySelector("#scissors").addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
