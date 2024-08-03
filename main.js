function getComputerChoice() {
  let num = parseInt(Math.random() * (4 - 1) + 1);
  return num == 1 ? "rock" : num == 2 ? "paper" : "scissors";
}

function getHumanChoice() {
  return prompt("Rock ? Paper ? Scissors ?");
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) console.log("Draw!");
  else if (humanChoice === "rock") {
    computerChoice === "paper"
      ? (console.log("You lose! Paper beats Rock"), computerScore++)
      : (console.log("You Win! Rock beats Scissors"), humanScore++);
  } else if (humanChoice === "paper") {
    computerChoice === "rock"
      ? (console.log("You Won! Paper beats Rock"), humanScore++)
      : (console.log("You Lose! Scissors beats Paper"), computerScore++);
  } else if (humanChoice === "scissors") {
    computerChoice === "rock"
      ? (console.log("You Win! Scissors beats Paper"), humanScore++)
      : (console.log("You Lose! Rock beats Scissors"), computerScore++);
  }
}
let humanScore = 0;
let computerScore = 0;

function playGame() {
  let i = 0;
  while (i++ < 5) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
  console.log(`Final Result: 
                 You: ${humanScore} , CPU: ${computerScore}`);
}

playGame();
