let choices = ["rock", "paper", "scissors"];
let beats = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

function getComputerChoice() {
  let NumberOneToTen = Math.ceil(Math.random() * 10);
  let choice = NumberOneToTen % 3;
  console.log(`The computer has chosen ${choices[choice]}`);
  return choices[choice];
}
function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper or Scissors?");
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === "r") {
    humanChoice = "rock";
  } else if (humanChoice === "p") {
    humanChoice = "paper";
  } else {
    humanChoice = "scissors";
  }
  return humanChoice;
}
function winCondition(human, computer) {
  if (computer == human) {
    console.log("Draw");
  } else if (beats[human] === computer) {
    console.log("you win");
  } else {
    console.log("You Lose");
  }
}
function gameLoop() {
  do {
    let human = String(getHumanChoice());
    let computer = String(getComputerChoice());
    winCondition(human, computer);
    let input = prompt("Press any key to keep playing Press 0 to quit");
  } while (input != "0");
}
gameLoop();
