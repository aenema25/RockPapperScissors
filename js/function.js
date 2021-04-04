const container = document.querySelector("#messages");
const points = document.querySelector(".points");
let computerPoint = 0,
  playerPoint = 0;
const computerPlay = () => {
  let options = ["rock", "papper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}
const checkWinner = () => {
  if (computerPoint == 5) {
    messageAdd("We Have a Winner! the computer won!");
    (playerPoint = 0), (computerPoint = 0);
  } else if (playerPoint == 5) {
    messageAdd("We Have a Winner! You won!");
    (playerPoint = 0), (computerPoint = 0);
  }
}
const messageAdd = (message) => {
  removeLast('content')
  pointCounter();
  let htmlSqueleton=`<div id="content"> ${message} </div>`
  container.insertAdjacentHTML('beforeend',htmlSqueleton);
}
const removeLast = (className) => {
  document.querySelectorAll("#" + className).forEach((e) => e.remove());
}
const pointCounter = () => {
  removeLast("player");
  removeLast("computer");
  let htmlSqueleton=`<div id="player">${playerPoint}</div><div id="computer">${computerPoint}</div>`;
  points.insertAdjacentHTML('beforeend',htmlSqueleton)
}

function letsPlay(e) {
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
  }
}
let gameOptions=document.getElementById('selection').getElementsByTagName('button');
Array.from(gameOptions, option => {
    option.addEventListener('click',letsPlay);
});