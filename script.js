let winCount = 0;
let lossCount = 0;
let tieCount = 0;

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}

function playerGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "you lose";
      lossCount++;
    } else if (computerMove === "paper") {
      result = "you win";
      winCount++;
    } else if (computerMove === "scissors") {
      result = "tie";
      tieCount++;
    }
  }
  if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "you win";
      winCount++;
    } else if (computerMove === "paper") {
      result = "tie";
      tieCount++;
    } else if (computerMove === "scissors") {
      result = "you lose";
      lossCount++;
    }
  }
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "tie";
      tieCount++;
    } else if (computerMove === "paper") {
      result = "you lose";
      lossCount++;
    } else if (computerMove === "scissors") {
      result = "you win";
      winCount++;
    }
  }
  var WL = document.querySelector(".text");
  document.getElementById("win-count").innerText = winCount;
  document.getElementById("loss-count").innerText = lossCount;
  document.getElementById("tie-count").innerText = tieCount;
  WL.textContent = `you picked ${playerMove} computer picked ${computerMove},it is ${result}`;
}

function reset() {
  winCount = 0;
  lossCount = 0;
  tieCount = 0;
  var WL = document.querySelector(".text");
  WL.textContent = "";
  document.getElementById("win-count").innerText = winCount;
  document.getElementById("loss-count").innerText = lossCount;
  document.getElementById("tie-count").innerText = tieCount;
}
