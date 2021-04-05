let computerPoint = 0;
let playerPoint = 0;
const computerPlay = () => {
  let options = ["rock", "papper", "scissors", "lizard", "spock"];
  return options[Math.floor(Math.random() * 5)]
};
const checkWinner = () => {
  if (computerPoint == 5) {
    alert("We Have a Winner! the computer won!");
    (playerPoint = 0), (computerPoint = 0);
    pointCounter();
    messageAdd("Lets Begin!");
  } else if (playerPoint == 5) {
    alert("We Have a Winner! You won!");
    (playerPoint = 0), (computerPoint = 0);
    pointCounter();
    messageAdd("Lets Begin!");
  }
};
const messageAdd = (message) => {
  removeLast("content");
  pointCounter();
  let htmlSqueleton = `<div id="content"> ${message} </div>`;
  document
    .querySelector("#messages")
    .insertAdjacentHTML("beforeend", htmlSqueleton);
};
const removeLast = (className) => {
  document.querySelectorAll("#" + className).forEach((e) => e.remove());
};
const pointCounter = () => {
  removeLast("player");
  removeLast("computer");
  let htmlSqueleton = `<div id="player">${playerPoint}</div><div id="computer">${computerPoint}</div>`;
  document
    .querySelector(".points")
    .insertAdjacentHTML("beforeend", htmlSqueleton);
};

const letsPlay = (e) => {
  pointCounter();
  let player = e.target.id.toLowerCase();
  if (player == computerPlay()) {
    removeLast("content");
    messageAdd("Its a tie !");
  } else if (player == "scissors" && computerPlay() == "papper") {
    playerPoint++;
    removeLast("content");
    messageAdd("Scissors! beat Pappers! Point for you!");
    checkWinner();
  } else if (player == "papper" && computerPlay() == "scissors") {
    computerPoint++;
    removeLast("content");
    messageAdd("Scissors! beat Pappers! Point for the computer");
    checkWinner();
  } else if (player == "scissors" && computerPlay() == "rock") {
    computerPoint++;
    removeLast("content");
    messageAdd("Rock beat Scissors ! Point for the computer!");
    checkWinner();
  } else if (player == "rock" && computerPlay() == "scissors") {
    playerPoint++;
    removeLast("content");
    messageAdd("Rock beat Scissors ! Point for you!");
    checkWinner();
  } else if (player == "rock" && computerPlay() == "papper") {
    computerPoint++;
    removeLast("content");
    messageAdd("Papper beat Rock! Point for the computer!");
    checkWinner();
  } else if (player == "papper" && computerPlay() == "rock") {
    playerPoint++;
    removeLast("content");
    messageAdd("Papper Beat Rock! Point for you!");
    checkWinner();
  } else if (player == "rock" && computerPlay() == "lizard") {
    playerPoint++;
    removeLast("content");
    messageAdd("Rock crushes Lizard! Point for you!");
    checkWinner();
  } else if (player == "lizard" && computerPlay() == "rock") {
    playerPoint++;
    removeLast("content");
    messageAdd("Rock crushes Lizard! Point for the computer!");
    checkWinner();
  } else if (player == "lizard" && computerPlay() == "spock") {
    playerPoint++;
    removeLast("content");
    messageAdd("Lizard poisons Spock! Point for you!");
    checkWinner();
  } else if (player == "spock" && computerPlay() == "lizard") {
    playerPoint++;
    removeLast("content");
    messageAdd("Lizard poisons Spock! Point for the computer!");
    checkWinner();
  } else if (player == "spock" && computerPlay() == "scissors") {
    playerPoint++;
    removeLast("content");
    messageAdd("Spock smashes Scissors! Point for you!");
    checkWinner();
  } else if (player == "scissors" && computerPlay() == "spock") {
    playerPoint++;
    removeLast("content");
    messageAdd("Spock smashes Scissors! Point for the computer!");
    checkWinner();
  } else if (player == "scissors" && computerPlay() == "lizard") {
    playerPoint++;
    removeLast("content");
    messageAdd("Scissors decapitates Lizard! Point for you!");
    checkWinner();
  } else if (player == "lizard" && computerPlay() == "scissors") {
    playerPoint++;
    removeLast("content");
    messageAdd("Scissors decapitates Lizard! Point for the computer!");
    checkWinner();
  } else if (player == "lizard" && computerPlay() == "papper") {
    playerPoint++;
    removeLast("content");
    messageAdd("Lizard eats Paper! Point for you!");
    checkWinner();
  } else if (player == "papper" && computerPlay() == "lizard") {
    playerPoint++;
    removeLast("content");
    messageAdd("Lizard eats Paper! Point for the computer!");
    checkWinner();
  } else if (player == "papper" && computerPlay() == "spock") {
    playerPoint++;
    removeLast("content");
    messageAdd("Paper disproves Spock! Point for you!");
    checkWinner();
  } else if (player == "spock" && computerPlay() == "papper") {
    playerPoint++;
    removeLast("content");
    messageAdd("Paper disproves Spock! Point for the computer!");
    checkWinner();
  } else if (player == "spock" && computerPlay() == "rock") {
    playerPoint++;
    removeLast("content");
    messageAdd("Spock vaporizes Rock! Point for you!");
    checkWinner();
  } else if (player == "rock" && computerPlay() == "spock") {
    playerPoint++;
    removeLast("content");
    messageAdd("Spock vaporizes Rock! Point for the computer!");
    checkWinner();
  }
};
document.getElementById("rock").addEventListener("click", letsPlay);
document.getElementById("papper").addEventListener("click", letsPlay);
document.getElementById("scissors").addEventListener("click", letsPlay);
document.getElementById("lizard").addEventListener("click", letsPlay);
document.getElementById("spock").addEventListener("click", letsPlay);
