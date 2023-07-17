const container = document.querySelector('#container');

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

let playerScore = 0;
let computerScore = 0;

let result = document.createElement('div');
result.classList.add('game');
result.textContent = "Game";
scoreDiv.appendChild(result);

function updateScore() {
    const playerScorePara = document.getElementById("pScore");
    const computerScorePara = document.getElementById("cScore");

    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
}




function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * choices.length);
    return choices[randomNum];
}

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
}));


let run = playGame();

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
    console.log("Rockz");
    console.log(playerScore);
    console.log(computerScore);
    console.log(playGame());
})

scissors.addEventListener('click', () => {
    const computerSelection = computerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    console.log("Scissorz");
})

paper.addEventListener('click', () => {
    const computerSelection = computerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
})


container.addEventListener('click', function (e) {
    
    if (e.target == rock) {

    }
    else if (e.target == paper) {
    }
    else if (e.target == scissors) {
    }
    else {
    }
    
})




















