const container = document.querySelector('#container');

const weaponBox = document.createElement('div');
weaponBox.classList.add('weaponBox');
container.appendChild(weaponBox);

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
container.appendChild(result);

let playerBoard = document.createElement('div');
playerBoard.classList.add('playerBoard');
playerBoard.textContent = "0";
container.appendChild(playerBoard);




const computerChoice = () => {
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
let run = playGame();

function playGame() {
    playRound();
    if (playerScore == 5) {
        alert ("Player wins!");
    }
    else if (computerScore == 5) {
        return "Computer wins!";
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
    console.log("Paperz");
})


container.addEventListener('click', function (e) {
    console.log(e.target);
    
    if (e.target == rock) {
        playerSelection = "rock";
        result.textContent = "Bluerock lol";
        console.log("You chose Rock!");
    }
    else if (e.target == paper) {
        console.log("You chose Paper!")
        result.textContent = "Bluepaper lol";
    }
    else if (e.target == scissors) {
        console.log("You chose Scissors!");
    }
    else {
        console.log("no");
    }
    
})




















