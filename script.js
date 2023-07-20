const container = document.querySelector('#container');
const restartButton = document.querySelector('newGame');
const weaponBox = document.createElement('div');
weaponBox.classList.add('weaponBox');
container.appendChild(weaponBox);
const choices = document.querySelectorAll('.weaponBox');

const scoreDiv = document.createElement('div');
scoreDiv.classList.add('scoreDiv');
container.appendChild(scoreDiv);

const rock = document.createElement('button');
rock.classList.add('rock');
rock.textContent = "Rock";
weaponBox.appendChild(rock);

const paper = document.createElement('button');
paper.classList.add('paper');
paper.textContent = "Paper";
weaponBox.appendChild(paper);

const scissors = document.createElement('button');
scissors.classList.add('scissors');
scissors.textContent = "Scissors";
weaponBox.appendChild(scissors);


//Player and Computer scores
let playerScore = 0;
let computerScore = 0;

//Result display
let result = document.createElement('div');
result.classList.add('game');
result.textContent = "Choose a weapon to start the game!";
scoreDiv.appendChild(result);

function newGame () {
    playerScore = 0;
    computerScore = 0;
}


//Score updator
function updateScore() {
    const playerScorePara = document.getElementById("pScore");
    const computerScorePara = document.getElementById("cScore");

    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
}

//Computer weapon generator
function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * choices.length);
    return choices[randomNum];
}




//Game checker
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        //Would like to display a "Draw!" here, but it did not seem to work,
        //i might look into this one later
    }
    else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        computerScore++;
        result.textContent = "Ouch! Paper beats Rock..";
    }
    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        playerScore++;
        result.textContent = "You win! Rock beats Scissors..";
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        playerScore++;
        result.textContent = "You win! Paper beats Rock..";
    }
    else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        computerScore++;
        result.textContent = "Ouch! Scissors beats Paper..";
    }
    else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        computerScore++;
        result.textContent = "Ouch! Rock beats Scissors..";
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        playerScore++;
        result.textContent = "You win! Scissors beats Paper";
    }
}


choices.forEach(choice => choice.addEventListener('click', (event) => {
    playRound(event);
    updateScore();
    playGame();
}));

//Winner checker
function playGame() {
    playRound();
    if (playerScore == 5) {
        result.textContent = "Player wins!";
    }
    else if (computerScore == 5) {
        result.textContent = "Computer wins!";
    }

}

rock.addEventListener('click', () => {
    let computerSelection = computerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
})

scissors.addEventListener('click', () => {
    let computerSelection = computerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
})

paper.addEventListener('click', () => {
    let computerSelection = computerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    console.log(computerSelection);
})

//Reset game function
document.getElementById("reset").onclick = function() {
document.getElementById("cScore").innerHTML = `Computer: ${computerScore = 0}`;
document.getElementById("pScore").innerHTML = `Player: ${playerScore = 0}`;
result.textContent = "Choose a weapon to start the game!";
    };















