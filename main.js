function getComputerChoice() {
  let num = parseInt(Math.random() * (4 - 1) + 1);
  return num == 1 ? "rock" : num == 2 ? "paper" : "scissors";
}

function getHumanChoice() {
  return prompt("Rock ? Paper ? Scissors ?");
}

function playRound(humanChoice) {
  humanChoice = humanChoice.toLowerCase();
  let computerChoice = getComputerChoice();
  if (humanChoice === computerChoice) div.textContent = "Draw!";
  else if (humanChoice === "rock") {
    computerChoice === "paper"
      ? ((div.textContent = "You lose! Paper beats Rock"), computerScore++)
      : ((div.textContent = "You Win! Rock beats Scissors"), humanScore++);
  } else if (humanChoice === "paper") {
    computerChoice === "rock"
      ? ((div.textContent = "You Won! Paper beats Rock"), humanScore++)
      : ((div.textContent = "You Lose! Scissors beats Paper"), computerScore++);
  } else if (humanChoice === "scissors") {
    computerChoice === "rock"
      ? ((div.textContent = "You Win! Scissors beats Paper"), humanScore++)
      : ((div.textContent = "You Lose! Rock beats Scissors"), computerScore++);
  }
}
let humanScore = 0;
let computerScore = 0;
let i = 0;

const btn = document.createElement("button");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const div = document.createElement("div");

btn.textContent = "Rock";
btn1.textContent = "Paper";
btn2.textContent = "Scissors";
div.id = "content";
div.textContent = "Your Choice Human?";

btn.style.cssText =
  "display: inline-block; margin: 5px ; border: 2px solid black; border-radius: 5px; background-color: grey; font-size: 30px; font-weight: semi-bold;padding: 14px";
btn1.style.cssText =
  "display: inline-block; margin: 5px ; border: 2px solid black; border-radius: 5px; background-color:grey; font-size:30px; font-weight:semi-bold;padding: 14px";
btn2.style.cssText =
  "display: inline-block; margin: 5px ; border: 2px solid black; border-radius: 5px; background-color:grey; font-size:30px; font-weight:semi-bold;padding: 14px";
div.style.cssText =
  "background-color:grey; width: 360px; box-sizing:border-box; padding:10px; margin-top:14px; border:black solid 3px; border-radius:5px; font-weight:semi-bold;text-align:center; ";

document.body.append(btn, btn1, btn2, div);

btn.addEventListener("click", () => {
  playRound("Rock");
  if (++i % 5 == 0) displayResult();
});
btn1.addEventListener("click", () => {
  playRound("Paper");
  if (++i % 5 == 0) displayResult();
});
btn2.addEventListener("click", () => {
  playRound("Scissors");
  if (++i % 5 == 0) displayResult();
});

function displayResult(c) {
  div.textContent = `${div.textContent}.
    Final Result:
                  You: ${humanScore} , CPU: ${computerScore}`;
}
