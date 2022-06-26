const gameOptions = ["rock", "papper", "scissors", "lizard", "spock"]
let newPlayer = ""
let player2 = ""

//player creator
class player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.option = '';
        this.addPoint = () => this.score++
        this.addOption = (option) => this.option = option
    }
}
//com player creator
class comPlayer {
    constructor() {
        this.name = 'COM';
        this.score = 0;
        this.option = '';
        this.addPoint = () => this.score++
        this.comPlays = () => this.option = gameOptions[Math.floor(Math.random() * 5)]
    }
}
//check if the com or player win the game
const checkWinner = (player1, player2) => {
    if (player1.score === 5) {
        alert(`${player1.name} won !`)
        player1.score = 0
        player2.score = 0
        document.getElementById('scoreboardFirstPlayerScore').innerText = player1.score
        document.getElementById('scoreboardSecondPlayerScore').innerText = player2.score
    } 
    if (player2.score === 5) {
        alert(`${player2.name} won !`)
        player1.score = 0
        player2.score = 0
        document.getElementById('scoreboardFirstPlayerScore').innerText = player1.score
        document.getElementById('scoreboardSecondPlayerScore').innerText = player2.score
    }
}
// check who win current round
const validateGame = (player1, player2) => {
    if (player1.option == player2.option) {
        alert('tie')
    } else if (player1.option == "scissors" && player2.option == "papper") {
        alert(`Scissors! beat Pappers! Point for ${player1.name}!`)
        player1.addPoint()
        document.getElementById('scoreboardFirstPlayerScore').innerText = player1.score
    } else if (player1.option == "papper" && player2.option == "scissors") {
        player2.addPoint()
        document.getElementById('scoreboardSecondPlayerScore').innerText = player2.score
        alert(`Scissors! beat Pappers! Point ${player2.name}`);
    } else if (player1.option == "scissors" && player2.option == "rock") {
        player2.addPoint()
        document.getElementById('scoreboardSecondPlayerScore').innerText = player2.score
        alert(`Rock beat Scissors ! Point ${player2.name}!`);
    } else if (player1.option == "rock" && player2.option == "scissors") {
        player1.addPoint()
        document.getElementById('scoreboardFirstPlayerScore').innerText = player1.score
        alert(`Rock beat Scissors ! Point ${player1.name}`);
    } else if (player1.option == "rock" && player2.option == "papper") {
        player2.addPoint()
        document.getElementById('scoreboardSecondPlayerScore').innerText = player2.score
        alert(`Papper beat Rock! Point ${player2.name}!`);
    } else if (player1.option == "papper" && player2.option == "rock") {
        player1.addPoint()
        document.getElementById('scoreboardFirstPlayerScore').innerText = player1.score
        alert(`Papper Beat Rock! Point ${player1.name}`);
    } else if (player1.option == "rock" && player2.option == "lizard") {
        player1.addPoint()
        document.getElementById('scoreboardFirstPlayerScore').innerText = player1.score
        alert(`Rock crushes Lizard! Point ${player1.name}`);
    } else if (player1.option == "lizard" && player2.option == "rock") {
        player2.addPoint()
        document.getElementById('scoreboardSecondPlayerScore').innerText = player2.score
        alert(`Rock crushes Lizard! Point ${player2.name}!`);
    } else if (player1.option == "lizard" && player2.option == "spock") {
        player1.addPoint()
        document.getElementById('scoreboardFirstPlayerScore').innerText = player1.score
        alert(`Lizard poisons Spock! Point ${player1.name}`);
    } else if (player1.option == "spock" && player2.option == "lizard") {
        player2.addPoint()
        document.getElementById('scoreboardSecondPlayerScore').innerText = player2.score
        alert(`Lizard poisons Spock! Point ${player2.name}!`);
    } else if (player1.option == "spock" && player2.option == "scissors") {
        player1.addPoint()
        document.getElementById('scoreboardFirstPlayerScore').innerText = player1.score
        alert(`Spock smashes Scissors! Point ${player1.name}`);
    } else if (player1.option == "scissors" && player2.option == "spock") {
        player2.addPoint()
        document.getElementById('scoreboardSecondPlayerScore').innerText = player2.score
        alert(`Spock smashes Scissors! Point ${player2.name}!`);
    } else if (player1.option == "scissors" && player2.option == "lizard") {
        player1.addPoint()
        document.getElementById('scoreboardFirstPlayerScore').innerText = player1.score
        alert(`Scissors decapitates Lizard! Point ${player1.name}`);
    } else if (player1.option == "lizard" && player2.option == "scissors") {
        player2.addPoint()
        document.getElementById('scoreboardSecondPlayerScore').innerText = player2.score
        alert(`Scissors decapitates Lizard! Point ${player2.name}!`);
    } else if (player1.option == "lizard" && player2.option == "papper") {
        player1.addPoint()
        document.getElementById('scoreboardFirstPlayerScore').innerText = player1.score
        alert(`Lizard eats Paper! Point ${player1.name}`);
    } else if (player1.option == "papper" && player2.option == "lizard") {
        player2.addPoint()
        document.getElementById('scoreboardSecondPlayerScore').innerText = player2.score
        alert(`Lizard eats Paper! Point ${player2.name}!`);
    } else if (player1.option == "papper" && player2.option == "spock") {
        player1.addPoint()
        document.getElementById('scoreboardFirstPlayerScore').innerText = player1.score
        alert(`Paper disproves Spock! Point ${player1.name}`);
    } else if (player1.option == "spock" && player2.option == "papper") {
        player2.addPoint()
        document.getElementById('scoreboardSecondPlayerScore').innerText = player2.score
        alert(`Paper disproves Spock! Point ${player2.name}!`);
    } else if (player1.option == "spock" && player2.option == "rock") {
        player1.addPoint()
        document.getElementById('scoreboardFirstPlayerScore').innerText = player1.score
        alert(`Spock vaporizes Rock! Point ${player1.name}`);
    } else if (player1.option == "rock" && player2.option == "spock") {
        player2.addPoint()
        document.getElementById('scoreboardSecondPlayerScore').innerText = player2.score
        alert(`Spock vaporizes Rock! Point ${player2.name}!`);
    }
}

// change to next screen (enter name)
document.getElementById("enterGameButton").addEventListener('click', () => {
    document.getElementById('enterGame').style.display = 'none';
    document.getElementById('players').style.display = 'flex';
})
// change to next screen (to enter the game ) and create a new player
document.getElementById("createPlayer").addEventListener('click', () => {
    if (isNaN(document.getElementById('name').value) && document.getElementById('name').value !== null) {
        newPlayer = new player(document.getElementById('name').value)
        document.getElementById('players').style.display = 'none';
        document.getElementById('startGame').style.display = 'flex';
        document.getElementById('scoreboardFirstPlayerHeader').innerText = newPlayer.name
    } else {
        alert('Enter a valid name')
    }
})
// change to next screen (start playing) and create a new COM player
document.getElementById("startGameButton").addEventListener('click', () => {
    document.getElementById('startGame').style.display = 'none';
    document.getElementById('scoreboard').style.display = 'grid';
    document.getElementById('optionSelection').style.display = 'block';
    document.getElementById('optionButtons').style.display = 'grid';
    player2 = new comPlayer()
})
//main function (plays the game)
const play = () => {
    player2.comPlays()
    validateGame(newPlayer,player2)
    checkWinner(newPlayer,player2)
}

// game option to launch game function
document.getElementById('rock').addEventListener('click', (e) => {
    newPlayer.option = e.target.id
    play()
})

document.getElementById('papper').addEventListener('click', (e) => {
    newPlayer.option = e.target.id
    play()
})

document.getElementById('scissors').addEventListener('click', (e) => {
    newPlayer.option = e.target.id
    play()
})

document.getElementById('lizard').addEventListener('click', (e) => {
    newPlayer.option = e.target.id
    play()
})

document.getElementById('spock').addEventListener('click', (e) => {
    newPlayer.option = e.target.id
    play()
})
