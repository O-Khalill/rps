let choices = ["rock", "paper", "scissors"];

let beats = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};
function setupButtons() {
  const rockBtn = document.querySelector(".rock button");
  const paperBtn = document.querySelector(".paper button");
  const scissorsBtn = document.querySelector(".scissor button");

  rockBtn.addEventListener("click", () => playRound("rock"));
  paperBtn.addEventListener("click", () => playRound("paper"));
  scissorsBtn.addEventListener("click", () => playRound("scissors"));
}
function getComputerChoice() {
  let NumberOneToTen = Math.ceil(Math.random() * 10);
  let choice = NumberOneToTen % 3;
  return choices[choice];
}
function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  winCondition(humanChoice, computerChoice);
}
function winCondition(human, computer) {
  if (computer == human) {
    alert(`Draw! computer chose ${computer}`);
  } else if (beats[human] === computer) {
    alert(`you win! computer chose ${computer}`);
  } else {
    console.log(`You Lose! computer chose ${computer}`);
  }
}

setupButtons();
