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
result.textContent = "Game";
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
        return "It's a draw!";
    }
    else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        computerScore++;
        return "Ouch! Paper beats Rock..";
    }
    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        playerScore++;
        return "You win! Rock beats Scissors..";
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        playerScore++;
        return "You win! Paper beats Rock..";
    }
    else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        computerScore++;
        return "Ouch! Scissors beats Paper..";
    }
    else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        computerScore++;
        return "Ouch! Rock beats Scissors..";
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        playerScore++;
        return "You win! Scissors beats Paper";
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
    const computerSelection = computerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
})

scissors.addEventListener('click', () => {
    const computerSelection = computerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
})

paper.addEventListener('click', () => {
    const computerSelection = computerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
})


document.getElementById("reset").onclick = function() {
document.getElementById("cScore").innerHTML = `Computer: ${computerScore = 0}`;
document.getElementById("pScore").innerHTML = `Player: ${playerScore = 0}`;
    };

















